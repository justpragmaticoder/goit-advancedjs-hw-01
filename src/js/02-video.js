import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

function playerTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

(() => {
    const iframe = document.querySelector('iframe');
    const player = new VimeoPlayer(iframe);

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time') ?? 0);
    player.on('timeupdate', throttle(playerTimeUpdate, 1000));
})();