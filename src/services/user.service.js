import axios from 'axios';

const url = `${import.meta.env.VITE_API_URL}/users`;

export const register = async ({ avatar, password, name, email }) => {
  const { data } = await axios.post(`${url}/register`, {
    avatar,
    password,
    name,
    email,
  });
  const city = data.data;
  return city;
};

export const login = async ({ password, email }) => {
  const { data } = await axios.post(`${url}/login`, { password, email });
  const city = data.data;
  return city;
};
