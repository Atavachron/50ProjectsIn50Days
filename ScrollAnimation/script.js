const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  //Calculate where the class of show will be added (position in the window)
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(box => {
    //Get the top position of the box
    const boxTop = box.getBoundingClientRect().top;

    //Add/remove the class of show, depending on the position
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

checkBoxes();
