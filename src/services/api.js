import axios from 'axios';

const api = axios.create({
  baseURL: 'https://graph.facebook.com/',
});

export default api;
