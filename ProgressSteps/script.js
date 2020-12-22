const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');

//Variable to hold the current active circle
let currentActiveCircle = 1;

nextBtn.addEventListener('click', () => {
  //Increment the current active circle by one when the next button is pressed
  currentActiveCircle++;

  //If the current active circle exceeds the length of the circles node list then set it to the length
  if (currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }

  update();
});

prevBtn.addEventListener('click', () => {
  currentActiveCircle--;
  if (currentActiveCircle < 1) {
    currentActiveCircle = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    //Add or remove the "active" class
    if (index < currentActiveCircle) {
      circle.classList.add('active');
    } else {
      //If the index of the circle is more than or equal to the currentActive circle
      circle.classList.remove('active');
    }
  });

  //Get all the current active circles
  const activeCircles = document.querySelectorAll('.active');

  //Set the width of the progress in percentage, calculated by the length of the active circles and all circles
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + '%';

  //Set the buttons to disabled or not depending on which circle we are ons
  if (currentActiveCircle === 1) {
    prevBtn.disabled = true;
  } else if (currentActiveCircle === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
