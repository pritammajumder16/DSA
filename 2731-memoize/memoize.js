/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const hashMap = new Map()
    return function (...args) {
        const stringifyVal = JSON.stringify([...args])
        if (hashMap.has(stringifyVal)) {
            return hashMap.get(stringifyVal)
        }
        const val = fn(...args)
        hashMap.set(stringifyVal, val)
        return val;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */