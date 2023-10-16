let song = document.getElementById("song");
let progress = document.getElementById("progress");
let ctlIcon = document.getElementById("ctlsong");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;


}
function playpause() {
    if (ctlIcon.classList.contains("fa-pause")) {
        song.pause();

        ctlIcon.classList.remove("fa-pause");
        ctlIcon.classList.add("fa-play");

    }
    else {
        song.play();
        ctlIcon.classList.add("fa-pause");
        ctlIcon.classList.remove("fa-play");
    }

}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctlIcon.classList.add("fa-pause");
    ctlIcon.classList.remove("fa-play");
}
