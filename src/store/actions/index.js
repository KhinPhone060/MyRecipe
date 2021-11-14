import axios from 'axios';
import * as api from '../api';

export function getRecipe() {
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/feeds/list',
    params: {size: '20', timezone: '+0700', vegetarian: 'false', from: '0'},
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': '34c7de6165msh7590624f4d29298p17edcejsn257308d89ee1',
    },
  };
  const request = axios
    .request(options)
    .then(response => response.data)
    .catch(error => console.log(error));
  return {
    type: 'GET_RECIPE',
    payload: request,
  };
}

export function Register() {
  return {
    type: 'REGISTER_USER',
    payload: api.registerUser,
  };
}

export function Login() {
  return {
    type: 'LOGIN_USER',
    payload: api.loginUser,
  };
}
