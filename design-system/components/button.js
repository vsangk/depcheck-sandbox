import { isArrayLike } from 'lodash';

if (isArrayLike('abc')) {
  console.log('cool app');
}

export const button = () => ({
  name: 'button',
});
