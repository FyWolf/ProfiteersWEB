const mediaPlayer = document.getElementById("audio-player");
const pauseButton = document.getElementById("MPPlayBtn");
const songTitle = document.getElementById("MPSongTitle");
let isSongPlaying = true;

pauseButton.addEventListener('click', () => {
    playPause();
});

function playPause(){
    if(isSongPlaying) {
        mediaPlayer.pause();
        isSongPlaying = false;
    } else {
        mediaPlayer.play();
        isSongPlaying = true;
    }
}
