import axios from 'axios';

import { getUserInfo } from './localStorage';
// eslint-disable-next-line import/no-cycle
import reissuingAccessToken from './reissuanceToken';

export const Api = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_ORIGIN}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const TokenApi = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_ORIGIN}`,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

TokenApi.interceptors.request.use(
  config => config,
  err => {
    return Promise.reject(err);
  }
);

TokenApi.interceptors.response.use(
  res => res,
  async (err) => {
    const originalRequest = err.config;
    const {response: {status}, _retry: retry} = originalRequest;

    if(status === 403 && !retry) {
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      try {
        await reissuingAccessToken();

        setTimeout(() => {
          const {accessToken} = getUserInfo();
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        }, 1);
      }
      catch(error) {
        if(error.response && err.response.data) {
          return Promise.reject(err.response.data);
        }

        return Promise.reject(error);
      }
    }

    return Promise.reject(err);
  }
)

export default TokenApi;