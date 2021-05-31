import '../sass/main.scss';
import pictureTemplate from '../templates/picture-template.hbs';
import debounce from 'lodash.debounce';
import pictureFind from './services/apiService.js';

const refs = {
  searchField: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
  body: document.querySelector('.start-body'),
};

window.onload = () => {
  refs.searchField.addEventListener(
    'input',
    debounce(e => {
      if (e.target.value === '') {
        refs.galleryContainer.innerHTML = '';
        refs.body.style.height = '100vh';
        refs.loadMoreBtn.classList.remove('visible');
      } else {
        pictureFind(e.target.value)
          .then(response => {
            if (response.data.total === 0) {
              refs.body.style.height = '100vh';
              alert('Упс... Ничего не найдено! Введите более точный запрос =)');
            } else {
              refs.searchField.value = e.target.value;
              refs.galleryContainer.innerHTML = '';
              const markupPictures = pictureTemplate(response.data.hits);
              refs.galleryContainer.insertAdjacentHTML('beforeend', markupPictures);
              refs.body.style.height = '100%';
              refs.loadMoreBtn.classList.add('visible');
            }
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
        refs.searchField.value = '';
      })
      .catch(error => console.log(error));
  }
};
