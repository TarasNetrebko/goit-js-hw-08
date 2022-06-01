import PLayer from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.getPlayed().then(function(played) {
    console.log(played);
})
const throttled = throttle(() => {
        player.getCurrentTime().then(function (played) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(played));
    })
}, 1000)
player.on("timeupdate", throttled);
player.on("loaded", function () {
    player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));
});