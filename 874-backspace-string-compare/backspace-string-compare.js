/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    // single loop to delete the hashes
    // for, while, do while 
    let i = s.length - 1;  // indexing for s 
    let j = t.length - 1; // indexing for t
    let numberOfHashesInS = 0;
    let numberOfHashesInT = 0;
    console.log(s, t)
    while ((i >= 0 || j >= 0 ) || (numberOfHashesInS>0 || numberOfHashesInT>0)) {
        if (s[i] != "#" && t[j] != "#" && numberOfHashesInS == 0 && numberOfHashesInT == 0) {
            if (s[i] != t[j]) {
                return false;
            } else {
                i--;
                j--;
            }
        }
        if (s[i] == "#") {
            numberOfHashesInS++;
            i--;
        } else if (numberOfHashesInS > 0) {
            i--;
            numberOfHashesInS--;
        }
        if (t[j] == "#") {
            numberOfHashesInT++; //4 - 3  j -1
            j--;
        } else if (numberOfHashesInT > 0) {
            j--;
            numberOfHashesInT--;
        }
    }
    return true;
};