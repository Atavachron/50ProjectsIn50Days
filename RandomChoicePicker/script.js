//Get the DOM elements
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

//Automatically focus on the text area
textarea.focus();

//Add event listener to the textarea that will run a function creating tag passing the value of the key pressed
textarea.addEventListener('keyup', e => {
  createTags(e.target.value);
});

function createTags(input) {
  //Split the input whenever there is a comma to create array elements
  //To avoid empty spaces, filter the result for empty strings
  //Return a new array, trimming any white space
  const tags = input
    .split(',')
    .filter(tag => tag.trim() !== '')
    .map(tag => tag.trim());

  tagsEl.innerHTML = '';
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
