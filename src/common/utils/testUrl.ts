import isNode from 'detect-node';

import { convertQuerykeyToUrl } from './url';

const host = isNode ? 'http://localhost' : '';

export function testUrl(queryKey) {
  const relativeUrl = convertQuerykeyToUrl(queryKey);

  return `${host}${relativeUrl}`;
}
