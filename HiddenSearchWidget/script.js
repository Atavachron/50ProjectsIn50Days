const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.getElementById('search');
const input = document.getElementById('input');

searchBtn.addEventListener('click', () => {
  //Toggle the class of "active" when the search button is clicked
  searchContainer.classList.toggle('active');

  //Set the focus on the input
  input.focus();
});
