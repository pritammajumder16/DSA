/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hashMap = new Map();
    let i = 0,startIndex =0, longestLength = 0, currLength = 0;
    while (i < s.length) {
        if (!hashMap.has(s[i]) || hashMap.get(s[i])<startIndex) { //nomatch
            currLength++;
        } else {
            startIndex = hashMap.get(s[i]) + 1;
            if (currLength > longestLength) {
                longestLength = currLength;
            }
            currLength = i-startIndex+1;
            if (s.length - startIndex < longestLength) {
                return longestLength;
            }
        }
        hashMap.set(s[i], i);
        i++;
    }
    if (currLength > longestLength) {
        return currLength;
    }
    return longestLength;
};