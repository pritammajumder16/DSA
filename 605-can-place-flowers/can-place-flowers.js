/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count=0;

    const length = flowerbed.length
    for(let i = 0;i<length;i++){
        if(flowerbed[i]==0&&(i==length-1||flowerbed[i+1]==0)&&(i==0||flowerbed[i-1]==0)){
            count++;
            flowerbed[i]=1;
        }
        if(count>=n)
        return true
    }
    return false
};