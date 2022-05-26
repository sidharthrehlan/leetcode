/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cacheList = new Map();
  this.size = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let value = -1;
  if (this.cacheList.has(key)) {
    value = this.cacheList.get(key);
    this.cacheList.delete(key);
    this.cacheList.set(key, value);
  }

  console.log(this.cacheList);
  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  //key does not exist in the list

  if (this.get(key) !== -1 && this.cacheList.size < this.size) {
    this.cacheList.set(key, value);
  } else if (this.get(key) === -1 && this.cacheList.size >= this.size) {
    for (let item of this.cacheList) {
      console.log('item---', item[0]);
      this.cacheList.delete(item[0]);
      break;
    }
    this.cacheList.set(key, value);
  } else {
    this.cacheList.set(key, value);
  }

  console.log(this.cacheList);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2);
cache.put(1, 'sid');
cache.put(2, 'kama');
cache.put(3, 'komal');
