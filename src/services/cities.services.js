import axios from 'axios';

const url = `${import.meta.env.VITE_API_URL}/cities`;

export const getCities = async (props = {}) => {
  const { search, getFavorites, sortByName } = props;
  console.log({ search, getFavorites, sortByName });
  const params = new URLSearchParams();
  if (search) {
    params.append('search', search);
  }
  if (getFavorites) {
    params.append('getFavorites', getFavorites);
  }
  if (sortByName) {
    params.append('sortByName', sortByName);
  }
  const { data } = await axios.get(url, { params });
  const cities = data.data;
  return cities;
};

export const getCity = async id => {
  const { data } = await axios.get(`${url}/${id}`);
  const city = data.data;
  return city;
};

export const setFavorite = async (id, favorite) => {
  const { data } = await axios.put(`${url}/${id}`, { favorite });
  const city = data.data;
  return city;
};

export const deleteCity = async id => {
  await axios.delete(`${url}/${id}`);
};
