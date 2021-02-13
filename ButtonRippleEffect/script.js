const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    //Calculate the coordinates of the mouse click in relation to the window
    const x = e.clientX;
    const y = e.clientY;

    //Calculate the top and left coordinates of the button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    //Remove the circle span from the DOM after half a second
    setTimeout(() => circle.remove(), 500);
  });
});
