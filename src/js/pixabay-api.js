export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41683416-a846e6e911dace2dd80246c40';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
