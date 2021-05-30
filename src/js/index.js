import '../sass/main.scss';

// 1) зарегистрироваться и получить ключ +
// 2) создать инпут и достучаться до него +
// 3) создать Галерея изображений и достучаться до него +
// 4) создать Карточка изображения шаблон + / -
// 5) добавить Material Icons +
// 6) создать кнопку Load more и достучаться до нее +
// 7)

import pictureTemplate from '../templates/picture-template.hbs';
import debounce from 'lodash.debounce';
import pictureFind from './services/apiService.js';

const refs = {
  searchField: document.querySelector('.search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('load-more-btn'),
};

// refs.loadMoreBtn.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });

refs.searchField.addEventListener(
  'input',
  debounce(e => {
    pictureFind(e.target.value)
      .then(response => {
        refs.galleryContainer.innerHTML = '';
        const markupPictures = pictureTemplate(response.data.hits);
        // console.log(markupPictures);
        refs.galleryContainer.insertAdjacentHTML('beforeend', markupPictures);
      })
      .catch(error => console.log(error));
  }, 500),
);
