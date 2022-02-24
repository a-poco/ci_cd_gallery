import { createApi } from 'unsplash-js';
// import { imageFetcher } from './fetcher.js'
import { KEY } from './key.js'

const unsplash = createApi({
  accessKey: KEY,
});

export const appendToElem = (url) => {
  console.log('TEST:', document.querySelector('div').length);
  const img = document.createElement('img')
  img.classList.add('image');
  img.setAttribute('src', url);
  document.querySelector('div').appendChild(img);
}

export const imageFetcher = (query) => {
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