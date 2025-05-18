const sounds = ['Beside you by KESHI', 'Good Days by SZA','TCTAB by Conan Gray']; //defines the id

sounds.forEach(sound => { //loop to each sound
    const btn = document.createElement('button');
    btn.classList.add('btn'); //adding btn class to the button
    btn.innerText = sound; //set the button to the sound

    btn.addEventListener('click', () => { //to play the audio
        stopPlaying();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').append(btn);
});

function stopPlaying() { //to pause the audio
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}