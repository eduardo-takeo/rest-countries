const axios = require('axios').default;

const baseFlags = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  timeout: 1000,
});

const api = {
  getAllFlags: () => {
    return baseFlags.get('/all').then((response) => response.data);
  },

  getCountryByName: (countryName) => {
    return baseFlags
      .get(`/name/${countryName}`)
      .then((response) => response.data[0]);
  },
};

export default api;
