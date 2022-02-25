import './styles/main.scss';

let state = {
  images: []
};

const createTemplate = state => {
  let imagesHTMLString = ""
  state.images.forEach(element => {
    imagesHTMLString += `<img src=${element}></img>`
  });
  return imagesHTMLString
}

const render = (htmlString, el) => {
  el.innerHTML = htmlString;
};

const updateState = (newState) => {
state = { ...state, ...newState }; 
window.dispatchEvent(new Event("statechange"));
};

window.addEventListener("statechange", () => {
  render(createTemplate(state), document.querySelector("#gallery"));
});

const imageFetcher = query => {
  return fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.KEY}&query=${query}`)
    .then(res => res.json())
    .then(test => {
      const urlArray = []
      test.results.forEach(elem => {
        urlArray.push(elem.urls.small)
      })
      updateState({ images: [...urlArray] });
    })
};

document.getElementById('searchButton').addEventListener('click', () => {
  document.querySelector('#gallery').innerHTML = '';
  const keyword = document.getElementById('searchField').value;
  imageFetcher(keyword);
});