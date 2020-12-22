//Get a node list of all the panels
const panels = document.querySelectorAll('.panel');

//Iterate through the node list
panels.forEach(panel => {
  //Add a click event listener to each panel
  panel.addEventListener('click', () => {
    //Remove the "active" class from every panel
    panels.forEach(panel => {
      panel.classList.remove('active');
    });
    //Add the "active" class to the clicked element
    panel.classList.add('active');
  });
});
