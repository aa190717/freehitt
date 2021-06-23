import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  req => req,
  err => err,
);

Api.interceptors.response.use(
  res => res.data,
  err => err,
);

export default Api;
