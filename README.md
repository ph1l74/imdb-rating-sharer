# ![IMDb Rating Sharer Logo](/resources/icons/16.png) IMDb Rating Sharer

## Description
Google Chrome extension that provide you to share your rating to twitter and facebook.

## About
This extension will allow you to share your movie rating immediately after you rate the movie.<br>
This function realized in IMDb mobile app but not in web-version. So I decided to make it by myself.

## Installation
### Install from Chrome Web Store
We are working on it.
### Install from Github
1. Download ZIP from Github:<br><br>
   ![Download ZIP from Github](https://sun9-38.userapi.com/NXStM1VFKKS_crYHjMZvSzhWfdld6vT-xfYMqw/pkIeZkhpSqI.jpg)<br><br>
2. Unzip archive into a separate folder.
3. Open Google Chrome.
4. Go to Extensions menu (Menu -> More tools -> Extensions or [chrome://extensions/](chrome://extensions/) in browser adress line).
5. Switch on Developer mode:<br><br>
   ![Switch on Developer mode](https://sun1-23.userapi.com/TvZq6UBb8EbdUSzEFQo_GlU0xzvq_2Upjh-U4Q/LALQmIvwSxY.jpg)<br><br>
   
6. Click on **Load unpacked** and chose the folder with unzipped archive:<br><br>
   ![Click on **Load unpacked** and chose the folder with unzipped archive](https://sun9-19.userapi.com/hYw-ql9lSX8-8ADV2FAxb2b6X_ST0sHKd1Zssw/WtITjIB7xwk.jpg)<br><br>

7. Turn on IMDB Rating Sharer extension.


## Project structure
### scripts/core.js
All logic placed in that file.
### scripts/socials.js
Necessary script for socials (only for twitter);
### resources/
That directory contains svg-icons and extension logo.
### styles/
That directory contains only one file: style.css;


## References
[Twitter Embeded Tweet Button](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview)<br>
[Facebook Share Dialog](https://developers.facebook.com/docs/sharing/reference/share-dialog/)

## Todo
- [x] Readme
- [ ] Chrome Web Store Publication
- [ ] Comment code
- [ ] Options page
- [ ] Add not 'not immediately' button
