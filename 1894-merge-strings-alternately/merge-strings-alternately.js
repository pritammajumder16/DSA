/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    if(word1.length==0){
        return word2;
    }else if (word2.length==0){
        return word1;
    }
    let word3="";
    let currentPointer = 0;
    let firstPointer =0;
    let secondPointer =0;
    while(currentPointer<word1.length+word2.length){
        if(currentPointer%2==0){
            word3+=word1[firstPointer++];
        }else{
            word3+=word2[secondPointer++];
        }
        //ab pqrs
        // cp - 0  a fp =1
        // cp - 1  p sp=1
        // cp - 2 b fp=2
           
        currentPointer++;
        if(firstPointer==word1.length&&secondPointer<word2.length){
            console.log(word3,word2)
            word3 +=word2.slice(secondPointer,word2.length)
            return word3;
        }else if(secondPointer==word2.length&&firstPointer<word1.length){
            word3+=word1.slice(firstPointer,word1.length)
            return word3;
        }
    }
    return word3;
};