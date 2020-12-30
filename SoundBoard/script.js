const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  buttons.appendChild(btn);
});
