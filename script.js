function LRUCache(size) {
  let cacheList = new Map();

  this.get = function (key) {
    let value = -1;
    if (cacheList.has(key)) {
      value = cacheList.get(key);
      cacheList.delete(key);
      cacheList.set(key, value);
    }

    console.log(cacheList);
    return value;
  };

  this.put = function (key, value) {
    //key does not exist in the list

    if (this.get(key) !== -1 && cacheList.size < size) {
      cacheList.set(key, value);
    } else if (this.get(key) === -1 && cacheList.size >= size) {
      for (let item of cacheList) {
        console.log('item---', item[0]);
        cacheList.delete(item[0]);
        break;
      }
      cacheList.set(key, value);
    } else {
      cacheList.set(key, value);
    }

    console.log(cacheList);
  };
}

let cache = new LRUCache(2);
cache.put(1, 'sid');
cache.put(2, 'kama');
cache.put(3, 'komal');
