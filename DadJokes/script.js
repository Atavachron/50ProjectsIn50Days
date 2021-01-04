//Get the dom elements
const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

//Set the API endpoint in a variable
const url = `https://icanhazdadjoke.com/`;

//This API requires an Accept header. Create an object holding the
//headers that will be passed as a second argument to fetch
const config = {
  headers: {
    Accept: 'application/json',
  },
};

//Create a function that will make the fetch request and then display the joke in the DOM
function getJoke() {
  fetch(url, config)
    .then(res => res.json())
    .then(data => (jokeEl.innerText = data.joke));
}

getJoke();

//Create an event listener on the button that will run the getJoke function
btnEl.addEventListener('click', getJoke);
