const LRU = require('lru-cache');

const options = {
  max: 10,
  length: function (n, key) {
    return n * 2 + key.length;
  },
  dispose: function (key, n) {
    n.close();
  },
  maxAge: 1000 * 60 * 60,
};

const cache = new LRU(options);

cache.set('key', 'value');

export { cache };
