//Get a node list of all the panels
const panels = document.querySelectorAll('.panel');

//Use forEach method to iterate through the node list
panels.forEach(panel => {
  //Add a click event listenet to each panel
  panel.addEventListener('click', () => {
    //Remove the "active" class from every panel
    panels.forEach(panel => {
      panel.classList.remove('active');
    });
    //Add the active class to the clicke element
    panel.classList.add('active');
  });
});
