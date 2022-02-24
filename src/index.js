import './styles/main.scss';
import { imageFetcher } from './fetcher';

document.getElementById('searchButton').addEventListener('click', () => {
  document.querySelector('#gallery').innerHTML = '';
  const keyword = document.getElementById('searchField').value;
  imageFetcher(keyword);
});
