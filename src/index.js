import './styles/main.scss'
import 'dotenv/config' 
import { createApi } from 'unsplash-js';
import fetch from 'node-fetch';
// const cats = require('./fetcher.js').catArray

// console.log('Cristinas key', process.env.KEY)

const unsplash = createApi({
    accessKey: process.env.KEY,
    headers: { 'X-Custom-Header': 'foo' },
    fetch
  });

// import { catArray } from './fetcher.mjs'
// const catArray = ['https://http.cat/100', 'https://http.cat/100', 'https://http.cat/100']

const appendToElem = (url) => {
    const img = document.createElement('img')
    img.classList.add('image');
    img.setAttribute('src', url);
    document.querySelector('#gallery').appendChild(img);
  }


//   cats.forEach(elem => appendToElem(elem))
// const img = document.createElement('img')
//   img.classList.add('image');
//   img.setAttribute('src', catArray[0]);
//   document.querySelector('#gallery').appendChild(img);

  const imageFetcher = () => {
    unsplash.search.getPhotos({
        query: 'cat',
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

  