import axios from 'axios';

const Service = axios.create({
  baseURL: '/api',
  timeout: 60 * 1000,
});

export default Service;
