const bg = document.getElementById('background');
const pwd = document.getElementById('password');

//Add an event listener to the password input
pwd.addEventListener('input', e => changeBackground(e));

//Create a function to change the background
function changeBackground(e) {
  //Define the blur value by subtracting the length of the password entered from the initial blur value of the background
  const blurValue = 20 - e.target.value.length * 2;

  //Set the value of the background blur to the newly calculated value
  bg.style.filter = `blur(${blurValue}px)`;
}
