/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let i = s.length - 1;   
    let j = t.length - 1;
    let numberOfHashesInS = 0;
    let numberOfHashesInT = 0;
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
            numberOfHashesInT++;
            j--;
        } else if (numberOfHashesInT > 0) {
            j--;
            numberOfHashesInT--;
        }
    }
    return true;
};