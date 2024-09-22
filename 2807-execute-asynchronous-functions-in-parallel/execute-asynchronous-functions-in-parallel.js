/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    const myPromise = new Promise( (res, rej) => {
        const result = []
        let resolvedPromisesCount = 0;
        functions.forEach((fn, index) => {
            fn().then(val => {
                result[index] = (val)
                resolvedPromisesCount++;
                if (resolvedPromisesCount == functions.length)
                    res(result)
            }).catch(rej)
        })
    })
    return myPromise;
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */