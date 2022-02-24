import 'dotenv/config' 
import { createApi } from 'unsplash-js';
// import fetch from 'node-fetch';

// console.log('Cristinas key', process.env.KEY)

const unsplash = createApi({
    accessKey: process.env.KEY,
  });


 const appendToElem = (url) => {
  const img = document.createElement('img')
  img.classList.add('image');
  img.setAttribute('src', url);
  document.querySelector('#gallery').appendChild(img);
}

//  const catArray = ['https://http.cat/100', 'https://http.cat/100', 'https://http.cat/100']


 export const imageFetcher = () => {
  unsplash.search.getPhotos({
      query: 'cat',
      page: 1,
      perPage: 10,
      color: 'green',
      orientation: 'portrait',
    }).then(test => {
      test.response.results.forEach(elem => {
        console.log('EACH ELEMENT', elem)
        // appendToElem(elem.urls.small); 
      })
      })
}


// imageFetcher();

module.exports.appendToElem = appendToElem
module.exports.catArray = catArray