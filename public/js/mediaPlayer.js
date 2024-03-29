const mediaPlayer = document.getElementById("audio-player");
const pauseButton = document.getElementById("MPPlayBtn");
const songTitle = document.getElementById("MPSongTitle");
const jsmediatags = window.jsmediatags;
let isSongPlaying = false;

pauseButton.addEventListener('click', () => {
    playPause();
});

function playPause() {
    if (isSongPlaying) {
        mediaPlayer.pause();
        isSongPlaying = false;
    } else {
        mediaPlayer.play();
        readMeta();
        isSongPlaying = true;
    }
}

function readMeta() {
    jsmediatags.read(mediaPlayer.src, {
        onSuccess: function (tag) {
            songTitle.innerText = tag.tags.title;
        },
        onError: function (error) {
            console.log(error);
        }
    });
}