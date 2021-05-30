import axios from 'axios';

const pictureFind = async pictureName => {
  axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=';
  const myKey = '21807321-d1b9b9077da7f78b4c19cddb8';

  try {
    let pageNumber = 1;
    const request = await axios.get(`${pictureName}&page=${pageNumber}&per_page=12&key=${myKey}`);
    return request.json().then(data => console.log(data));
  } catch (error) {
    return error;
  }
};

export default pictureFind;

// export default function getData(searchValue, pageNumber) {
//   return axios(
//     `${baseUrl}?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${key}`,
//   ).then(({ data }) => data.hits);
// }

// export default async (name, page) => {
//   try {
//     const picturesList = await fetch(
//       `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=${page}&per_page=9&key=18996583-5f88ddbbd0a62c224fff1ccf9`,
//     );
//     return picturesList.json();
//   } catch (error) {
//     return error;
//   }
// };
