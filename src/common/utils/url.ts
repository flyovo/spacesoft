import type { ObjectType } from '@ipf-dev/rs-common';

export const getQueryString = (queryParams: object | undefined) => {
  if (!queryParams) {
    return '';
  }

  return Object.entries(queryParams)
    .filter(([, value]) => typeof value !== 'undefined' && value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

const getQueryParams = (queryKey: Array<string | object>) =>
  queryKey.find((value) => typeof value === 'object') as ObjectType | undefined;

export const convertQuerykeyToUrl = (
  queryKey: Array<string | object> | string,
) => {
  if (!Array.isArray(queryKey)) {
    return queryKey;
  }

  const queryParams = getQueryParams(queryKey);

  const endpoint = queryParams
    ? queryKey.slice(0, -1).join('/')
    : queryKey.join('/');

  const queryString = getQueryString(queryParams);

  return `/${endpoint}?${queryString}`;
};
