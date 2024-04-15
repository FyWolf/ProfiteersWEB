const mediaPlayer = document.getElementById("audio-player");
const pauseButton = document.getElementById("MPPlayBtn");
const songTitle = document.getElementById("MPSongTitle");
const volumeSlider = document.getElementById("MPVolume");
const jsmediatags = window.jsmediatags;
const defaultVolume = 0.3;
let isSongPlaying = false;

volumeSlider.addEventListener('input', function() {
    // Update the volume of the audio player when the slider value changes
    const volume = volumeSlider.value / 100; // Convert range 0-100 to volume 0-1
    mediaPlayer.volume = volume;
});

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

mediaPlayer.volume = defaultVolume;
mediaPlayer.play();