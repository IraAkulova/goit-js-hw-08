import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
    const iframePlayer = new Player(iframe);

    iframePlayer.on('play', function() {
        console.log('played the video!');
    });

    iframePlayer.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

iframePlayer.on('timeupdate', throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000));
iframePlayer.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});