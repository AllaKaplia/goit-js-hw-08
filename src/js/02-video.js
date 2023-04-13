import Player from '@vimeo/player';
import  throttledFun from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player(iframeEl);

player.on("timeupdate", throttledFun(onVideoPlay, 1000));

function onVideoPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(Math.round(seconds)));
    console.log('Played the video!', Math.round(seconds));
}

player.setCurrentTime(
    JSON.parse(localStorage.getItem('videoplayer-current-time'))
);