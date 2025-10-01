import axios from 'axios';
import './css/base.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52544732-939bdd7f86cf76540eb760f6b';

const list = document.querySelector('.list');
const form = document.querySelector('.form');
const submitBtn = document.querySelector('.submit-btn');
const searchText = form[`search-text`];

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 18,
  },
});

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const searchText = event.target.elements[`search-text`].value
    .toLowerCase()
    .trim();
  if (!searchText) return;
  instance
    .get('', { params: { q: searchText } })
    .then(({ data }) => {
      console.log(data.hits);

      list.innerHTML = '';
      list.innerHTML = createMarkup(data.hits);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
    <img 
    class="gallery-image"
    src="${webformatURL}"
    alt="${tags}"
    />
    </a>
      <ul class="gallery-content-list">
      <li class="gallery-content-item">
      <div class="content-wrapper">
        <h3 class="gallery-content-title">Likes</h3>
        <p class="gallery-title-value">${likes}</p>
      </div>
      <div class="content-wrapper">
        <h3 class="gallery-content-title">Views</h3>
        <p class="gallery-title-value">${views}</p>
      </div>
       <div class="content-wrapper">
         <h3 class="gallery-content-title">Comments</h3>
        <p class="gallery-title-value">${comments}</p>
       </div>
       <div class="content-wrapper">
         <h3 class="gallery-content-title">Downloads</h3>
        <p class="gallery-title-value">${downloads}</p>
       </div>
      </li>
      </ul>
    </li>
    `
    )
    .join('');
}
