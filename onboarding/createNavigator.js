import { zipObject } from 'lodash';

export default () => {
  const navigator = {
    name: 'navigator',
    details: zipObject(['a', 'b'], [1, 2]),
  };
  return navigator;
};
