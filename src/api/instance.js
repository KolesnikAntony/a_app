import axios from 'axios';

const defaultData = { token: '', host: 'https://jsonplaceholder.typicode.com/' };

const { host, token } = window.ConnectionManager?.get('HEALTH') || defaultData;

export const instance = axios.create({
  headers: {
    accept: '*/*',
    'accept-language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6,la;q=0.5,pl;q=0.4',
    Authorization: `Bearer ${token}`,
  },
  baseURL: `${host}`,
});
