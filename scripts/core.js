'use strict';

const ratingBtn = document.querySelector('.star-rating-button');
const ratingDiv = document.querySelector('.star-rating');
const ratingValue = document.querySelector('.star-rating-value');


const injectSrc = (type, url) => {
    console.log(type, url);
    if (!['js', 'svg', 'css'].includes(type))
        return;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let container;
            if (type === 'svg') {
                container = document.createElement('div');
                container.style.display = 'none';

            } else if (type === 'js') {
                container = document.createElement('script');
                container.type = "module";

            } else if (type === 'css') {
                container = document.createElement('style');
            }

            container.innerHTML = xhr.response;
            document.head.appendChild(container);
        }
    }

    xhr.open('GET', url, true);
    xhr.send(null);
}

const getMovieInfo = () => {
    return document.querySelector('.title_wrapper').children[0].innerText;
}

const getRating = () => {
    return ratingValue.innerText;
}

const initImport = () => {
    const resources = [
        "scripts/socials.js"
    ]

    for (let i = 0; i < resources.length; i++) {
        injectSrc(resources[i].split('.').pop(), chrome.extension.getURL(resources[i]));
    }
}

const createTwitterLink = () => {
    const link = document.createElement('a');
    // link.classList.add('twitter-share-button');
    link.href = 'https://twitter.com/intent/tweet';
    link.href += `?text=I%20rated%20${getMovieInfo()}%20${getRating()}/10&url=${window.location.href}`
    link.target = "_blank";
    return link;
}

const createFacebookLink = () => {
    const link = document.createElement('a');
    link.dataset.url = 'http://www.facebook.com/dialog/feed?';
    link.dataset.url += `app_id=368372737881382&display=popup&quote=I%20rated%20${getMovieInfo()}%20${getRating()}/10&link=${window.location.href}&redirect_uri=${window.location.href}`;
    link.target = "_blank";
    return link;
}

const showShareWindow = () => {
    const shareWindow = document.createElement('div');
    const shareButtons = document.createElement('div');
    const twitterIcon = document.createElement('img');
    const twitterLink = createTwitterLink();
    const facebookIcon = document.createElement('img');
    const facebookLink = createFacebookLink();
    const shareWindowText = document.createElement('div');
    const closeDiv = document.createElement('div');
    const closeIcon = document.createElement('img');

    closeIcon.src = chrome.extension.getURL("resources/close.svg");
    closeIcon.classList.add('imdbrs-icon');
    closeIcon.classList.add('imdbrs-icon-close');
    closeDiv.appendChild(closeIcon);

    closeDiv.addEventListener('click',
        () => {
            if (document.getElementById('imdbrsWindow')) {
                document.getElementById('imdbrsWindow').remove();
            }
        });

    shareWindow.id = "imdbrsWindow";
    shareButtons.classList.add('imdbrs-buttons-div');
    twitterIcon.src = chrome.extension.getURL("resources/tw.svg");
    twitterIcon.classList.add('imdbrs-icon');
    twitterLink.appendChild(twitterIcon);
    facebookIcon.src = chrome.extension.getURL("resources/fb.svg");
    facebookIcon.classList.add('imdbrs-icon');
    facebookLink.appendChild(facebookIcon);
    shareButtons.appendChild(twitterLink);
    shareButtons.appendChild(facebookLink);
    shareWindow.classList.add('imdbrs-window');
    shareWindowText.classList.add('imdbrs-text');
    shareWindowText.innerText = `Wanna share your new rating?`;
    shareWindow.appendChild(closeDiv);
    shareWindow.appendChild(shareWindowText);
    shareWindow.appendChild(shareButtons);
    ratingBtn.appendChild(shareWindow);

}

const observer = new MutationObserver(
    (mut) => {
        mut.forEach(
            (m) => {
                if (m.type == 'attributes') {
                    showShareWindow();
                };
            }
        );
    }
);

const coreInit = () => {
    initImport();
    observer.observe(ratingDiv, { attributes: true });
    console.log(`IMDb Rating Sharer v.0.1.3 loaded!`);
}


coreInit();