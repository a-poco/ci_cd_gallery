import './styles/main.scss';

window.localStorage.clear()

let state = {
  images: []
};

const createTemplate = currentState => {
  let imagesHTMLString = '';
  currentState.images.forEach(element => {
    imagesHTMLString += `<img src=${element}></img>`;
  });
  return imagesHTMLString;
};

const render = (htmlString, el) => {
  const element = el;
  element.innerHTML = htmlString;
};

const updateState = newState => {
  state = { ...state, ...newState };
  window.dispatchEvent(new Event('statechange'));
};

window.addEventListener('statechange', () => {
  render(createTemplate(state), document.querySelector('#gallery'));
});

const imageFetcher = query => fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.KEY}&query=${query}`)
  .then(res => res.json())
  .then(test => {
    const urlArray = [];
    test.results.forEach(elem => {
      urlArray.push(elem.urls.small);
    });
    updateState({ images: [...urlArray] });
  });

document.getElementById('searchButton').addEventListener('click', () => {
  document.querySelector('#gallery').innerHTML = '';
  const keyword = document.getElementById('searchField').value;
  window.localStorage.setItem(`${keyword}`, keyword)
  // console.log(window.localStorage.entries())
  imageFetcher(keyword);
  historyGenerator();
});

const historyGenerator = () => {
  document.querySelector('#searchHistory').innerHTML = '';
  const histArr = [];
  for (const key in localStorage) {
    histArr.push(key);
  }
  histArr.splice(-6, 6)
  histArr.forEach(elem => {
    const el = document.createElement('option')
    el.setAttribute('value', elem)
    document.querySelector('#searchHistory').appendChild(el)
  })
  // console.log(histArr)
}

