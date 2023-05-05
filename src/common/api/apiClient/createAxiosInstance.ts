import axios from 'axios';

import type { ApiClient } from './types';
import { getBaseUrl } from './utils';

export default function createAxiosInstance({
  getAccessToken,
}: {
  getAccessToken: () => string;
}) {
  const axiosClient: ApiClient = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  axiosClient.interceptors.request.use(
    function (config) {
      const accessToken = getAccessToken();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return {
        ...config,
        baseURL: getBaseUrl(config.url),
      };
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  axiosClient.interceptors.response.use(
    function (response) {
      return response.data;
    },
    async function (error) {
      return Promise.reject(error);
    },
  );

  return axiosClient;
}
