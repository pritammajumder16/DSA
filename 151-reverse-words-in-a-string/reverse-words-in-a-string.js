/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let wordArr = s.split(" ")
    wordArr = wordArr.filter(e => e != "")
    for (let i = 0, j = wordArr.length - 1; i < j; i++, j--) {
        const temp = wordArr[i];
        wordArr[i] = wordArr[j];
        wordArr[j] = temp;
    }
    return wordArr.join(" ")
};