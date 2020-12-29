const loading = document.querySelector('.loading');
const background = document.querySelector('.background');

//Initialize a variable that will hold the value of load starting from 0
let load = 0;

//Create a function that will increment the value of load and stop when it reaches 100
//The function should also display the value on the screen
function blurring() {
  load++;

  //Check if the load value is over 99 and in that case clear the interval
  if (load > 99) {
    clearInterval(i);
  }

  //Display the value of load on the screen
  loading.innerText = `${load}%`;
  //Decrease the opacity of the text
  loading.style.opacity = scale(load, 0, 100, 1, 0);

  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//Function mapping the numbers from 0 to 100 to numbers from 1 to 0
function scale(num, inMin, inMax, outMin, outMax) {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

//Call the function incrementing the value of load every 30 miliseconds
let i = setInterval(blurring, 30);
