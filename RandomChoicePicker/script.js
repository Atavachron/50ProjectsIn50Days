//Get the DOM elements
const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

//Automatically focus on the text area
textarea.focus();

//Add event listener to the textarea that will run a function creating tag passing the value of the key pressed
textarea.addEventListener('keyup', e => {
  createTags(e.target.value);

  //Check if the key is Enter
  if (e.key === 'Enter') {
    //Clear the input value after 10ms
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
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

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightTag(randomTag);

    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

//Pick a random tag from all the tags
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

//Function adding the highlight class to a tag
function highlightTag(tag) {
  tag.classList.add('highlight');
}

//Function removing the highlight class from a tag
function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
