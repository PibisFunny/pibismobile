const URL = 'https://m.pibis.net/media/halflife/';
const soundFiles = [
    URL + 'sci_fear1.mp3',
    URL + 'sci_fear4.mp3',
    URL + 'sci_fear6.mp3',
    URL + 'sci_fear7.mp3',
    URL + 'sci_fear11.mp3',
    URL + 'sci_fear12.mp3',
    URL + 'sci_fear15.mp3',

    URL + 'sci_pain1.mp3',
    URL + 'sci_pain2.mp3',
    URL + 'sci_pain3.mp3',
    URL + 'sci_pain4.mp3',
    URL + 'sci_pain5.mp3',

    URL + 'mus_mt_yeah.mp3',
    URL + 'say1.mp3',

    // URL + 'NUKE.mp3'
];

function getRandomSound() {
    const randomIndex = Math.floor(Math.random() * soundFiles.length);
    return soundFiles[randomIndex];
}

let isCooldown = false;

function play() {
    if (isCooldown) return;

    const audioElement = document.getElementById('audio');
    audioElement.src = getRandomSound();
    audioElement.play();

    isCooldown = true;
    setTimeout(() => {
        isCooldown = false;
    }, 575);
}

const preloadAudio = (files) => {
    files.forEach(file => {
        const audio = new Audio(file);
        audio.preload = 'auto';
        document.body.appendChild(audio);
    });
};

// Preload all sound files
preloadAudio(soundFiles);
