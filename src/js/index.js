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

pictureFind('sun');

// refs.loadMoreBtn.addEventListener(
//   'input',
//   debounce(e => {}, 500),
// );

// refs.countryInputField.addEventListener(
//   'input',
//   debounce(e => {
//     country(e.target.value)
//       .then(response => {
//         refs.countryListRoot.innerHTML = '';
//         if (response.length > 10) {
//           console.log(response.length);
//           return error({
//             text: 'Too many matches found. Please enter a more specific query!',
//           });
//         } else if (response.length > 1) {
//           const murkupCountries = countryListTpl(response);

//           refs.countryListRoot.insertAdjacentHTML('beforeend', murkupCountries);
//         } else {
//           const murkupCountry = countryIndicatedTpl(response);
//           //   refs.countryListRoot.innerHTML = '';
//           refs.countryListRoot.insertAdjacentHTML('beforeend', murkupCountry);
//         }
//       })
//       .catch(error => console.log(error));
//   }, 500),
// );
