import { createApi } from 'unsplash-js';


const unsplash = createApi({
  accessKey: process.env.KEY,
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