/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = {a:true,e:true,i:true,o:true,u:true}
    let count = 0;
    let firstPointer = 0;
    let secondPointer=0;
    let currentVowelLength=0;
    while(firstPointer<s.length){
        if(vowels[s[firstPointer]]){
            currentVowelLength++;
        }
        if(firstPointer-secondPointer==k-1){
            if(currentVowelLength>count){
                count=currentVowelLength
            }
            if(vowels[s[secondPointer]]){
                currentVowelLength--;
            }
            secondPointer++;
        }
        firstPointer++;
    }
    return count;
};