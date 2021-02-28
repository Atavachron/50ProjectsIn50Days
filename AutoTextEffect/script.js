const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'This is auto text effect';

//Variable showing where we are in the text
let idx = 1;
//Variable for the speed
let speed = 300 / speedEl.value;

//Call the function that will write the text
writeText();

function writeText() {
  //Set the inner text of the textEl to the first character of the text variable
  textEl.innerText = text.slice(0, idx);

  //Increment the index variable
  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

//Add event listener to the speed element and change the speed variable based on the selected value
speedEl.addEventListener('input', e => (speed = 300 / e.target.value));
