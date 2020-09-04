const axios = require('axios').default;

const baseFlags = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  timeout: 1000,
});

const api = {
  getAllFlags: () => {
    return baseFlags.get('/all').then((response) => response);
  },
};

export default api;
