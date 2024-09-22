/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const myPromise = new Promise((res,rej)=>{
        setTimeout(res,millis)
    })
    return  await myPromise;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */