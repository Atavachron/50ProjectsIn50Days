const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');

//Iterate through the sounds array and create a button for each element
sounds.forEach(sound => {
  const btn = document.createElement('button');

  //Add the class of btn to each button
  btn.classList.add('btn');

  //Set the button text to the correspondins name
  btn.innerText = sound;

  //Add an event listener to the newly created button
  btn.addEventListener('click', () => {
    //Stop any other sounding audios
    stopSounds();
    //Play the clicked audio
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);
});

//Function stopping the current sounding audio
function stopSounds() {
  //Iterate through the array with sound names
  sounds.forEach(sound => {
    //Get the audio element with the corresponding id
    const song = document.getElementById(sound);

    //Pause the audio
    song.pause();
    //Set the audio current time to 0 (rewind)
    song.currentTime = 0;
  });
}
