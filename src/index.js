import './styles/main.scss'
import { createApi } from 'unsplash-js';
// import 'dotenv/config' 
// import { imageFetcher } from './fetcher.js'
import { KEY } from './key.js'
// const KEY = "qNAjqkwjYSvdsyctNjCYaqle-_2j7bnl7_a2y3PhDq4";
// console.log(KEY);

const unsplash = createApi({
  accessKey: KEY,
});

const appendToElem = (url) => {
  const img = document.createElement('img')
  img.classList.add('image');
  img.setAttribute('src', url);
  document.querySelector('#gallery').appendChild(img);
}

const imageFetcher = () => {
  unsplash.search.getPhotos({
      query: 'monkey',
      page: 1,
      perPage: 10,
      color: 'green',
      orientation: 'portrait',
    }).then(test => {
      test.response.results.forEach(elem => {
        console.log('EACH ELEMENT', elem)
        appendToElem(elem.urls.small); 
      })
      })
}

imageFetcher()
