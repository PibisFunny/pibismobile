const URL = 'https://m.pibis.net/media/halflife/';
const soundFiles = [
    URL + 'sci_fear1.wav',
    URL + 'sci_fear2.wav',
    URL + 'sci_fear3.wav',
    URL + 'sci_fear4.wav',
    URL + 'sci_fear5.wav',
    URL + 'sci_fear6.wav',
    URL + 'sci_fear7.wav',
    URL + 'sci_fear8.wav',
    URL + 'sci_fear9.wav',
    URL + 'sci_fear10.wav',
    URL + 'sci_fear11.wav',
    URL + 'sci_fear12.wav',
    URL + 'sci_fear13.wav',
    URL + 'sci_fear14.wav',
    URL + 'sci_fear15.wav',

    URL + 'sci_pain1.wav',
    URL + 'sci_pain2.wav',
    URL + 'sci_pain3.wav',
    URL + 'sci_pain4.wav',
    URL + 'sci_pain5.wav',
    URL + 'sci_pain6.wav',
    URL + 'sci_pain7.wav',
    URL + 'sci_pain8.wav',
    URL + 'sci_pain9.wav',
    URL + 'sci_pain10.wav',

    URL + 'NUKE.mp3'
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
