import { zipObject } from 'lodash';

import { cache } from './utils';

export default () => {
  const navigator = {
    name: 'navigator',
    details: zipObject(['a', 'b'], [1, 2]),
    cache,
  };
  return navigator;
};
