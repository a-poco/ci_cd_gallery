import './styles/main.scss'
import { createApi } from 'unsplash-js';
// import { imageFetcher } from './fetcher.js'
import { KEY } from './key.js'

const unsplash = createApi({
  accessKey: KEY,
});

document.getElementById("searchButton").addEventListener("click", () => {
  document.querySelector('#gallery').innerHTML = '';
  const keyword = document.getElementById('searchField').value
  imageFetcher(keyword)
})

const appendToElem = (url) => {
  const img = document.createElement('img')
  img.classList.add('image');
  img.setAttribute('src', url);
  document.querySelector('#gallery').appendChild(img);
}

const imageFetcher = (query) => {
  unsplash.search.getPhotos({
      query: query,
      page: 1,
      perPage: 10,
      orientation: 'landscape',
    }).then(test => {
      test.response.results.forEach(elem => {
        console.log('EACH ELEMENT', elem)
        appendToElem(elem.urls.small); 
      })
      })
}

