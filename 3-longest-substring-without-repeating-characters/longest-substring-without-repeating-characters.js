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
    while (i < s.length) { //1   {d:0}
        if (!hashMap.hasOwnProperty(s[i])) {
            hashMap[s[i]] = i;
            currLength++;
            i++;
        } else {
            if (currLength > longestLength) {
                longestLength = currLength;
            }
            currLength = 0;
            startIndex = hashMap[s[i]] + 1;
            hashMap = {}
            i = startIndex;
            if (s.length - i < longestLength) {
                return longestLength;
            }
        }
    }
    if (currLength > longestLength) {
        return currLength;
    }
    return longestLength;
};