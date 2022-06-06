import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

/**
 * 6. Ini merupakan function untuk melakukan HTTP Request POST untuk menambahkan username, email, dan password
 *    user baru menuju API yang sudah dibuat.
 */
const register = (fullname, email, password) => {
  return axios.post(API_URL + 'signup', {
    fullname,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
