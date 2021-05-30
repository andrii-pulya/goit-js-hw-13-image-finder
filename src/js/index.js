import '../sass/main.scss';
import pictureTemplate from '../templates/picture-template.hbs';
import debounce from 'lodash.debounce';
import pictureFind from './services/apiService.js';

const refs = {
  searchField: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

window.onload = () => {
  refs.searchField.addEventListener(
    'input',
    debounce(e => {
      if (e.target.value === '') {
        refs.galleryContainer.innerHTML = '';
      } else {
        pictureFind(e.target.value)
          .then(response => {
            refs.searchField.value = e.target.value;
            refs.galleryContainer.innerHTML = '';
            const markupPictures = pictureTemplate(response.data.hits);
            refs.galleryContainer.insertAdjacentHTML('beforeend', markupPictures);
          })
          .catch(error => console.log(error));
      }
    }, 500),
  );

  refs.loadMoreBtn.addEventListener('click', onLoadMore);

  function onLoadMore(e) {
    e.preventDefault();
    pictureFind(refs.searchField.value)
      .then(response => {
        const markupPictures = pictureTemplate(response.data.hits);
        refs.galleryContainer.insertAdjacentHTML('beforeend', markupPictures);
        refs.loadMoreBtn.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      })
      .catch(error => console.log(error));
  }
};
