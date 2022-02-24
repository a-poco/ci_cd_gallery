import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.KEY,
});

export const appendToElem = url => {
  const img = document.createElement('img');
  img.classList.add('image');
  img.setAttribute('src', url);
  document.querySelector('div').appendChild(img);
};

export const imageFetcher = query => {
  unsplash.search.getPhotos({
    query,
    page: 1,
    perPage: 10,
    orientation: 'landscape',
  }).then(test => {
    test.response.results.forEach(elem => {
      appendToElem(elem.urls.small);
    });
  });
};
