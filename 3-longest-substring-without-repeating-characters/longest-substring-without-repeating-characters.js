/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hashMap = {};
    let i = 0;
    let startIndex = 0;
    let longestLength = 0;
    let currLength = 0;
    while (i < s.length) {
        if (!hashMap.hasOwnProperty(s[i])|| hashMap[s[i]]<startIndex) { //nomatch
            currLength++;
        } else {  //restart 
            if (currLength > longestLength) {
                longestLength = currLength;
            }
            startIndex = hashMap[s[i]] + 1;
            currLength = i-startIndex+1;
            if (s.length - startIndex < longestLength) {
                return longestLength;
            }
        }
        hashMap[s[i]] = i;
        i++;
    }
    if (currLength > longestLength) {
        return currLength;
    }
    return longestLength;
};