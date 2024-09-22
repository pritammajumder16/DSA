var TimeLimitedCache = function () {
    this.hashMap = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    let returnBool = false
    if (this.hashMap.has(key)) {
        returnBool = true;
        clearTimeout(this.hashMap.get(key).timer)
    }
    const timer = setTimeout(() => this.hashMap.delete(key), duration)
    this.hashMap.set(key, {value,timer})
    return returnBool;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    if (this.hashMap.has(key)) {
        return this.hashMap.get(key).value
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.hashMap.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */