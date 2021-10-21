import axios from 'axios';

export const Api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_ORIGIN}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})