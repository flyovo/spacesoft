import { getAccessToken } from '../../store/securityStore';
import createAxiosInstance from './createAxiosInstance';

export const apiClient = createAxiosInstance({
  getAccessToken,
});
