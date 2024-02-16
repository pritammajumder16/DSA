/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let i = s.length - 1, j = t.length - 1;
    let sDel = 0;
    let tDel = 0;
    while ((i >= 0 || j >= 0)||( tDel>0 || sDel > 0)) {
        if ((sDel == 0 && tDel == 0 && s[i] != "#" && t[j] != "#")) {
            if ((s[i] != t[j]) ) { return false; } else {
                i--;
                j--;
            }
        }
        if (s[i] == "#") {
            sDel++;
            i--;
        } else if (sDel > 0) {
            i--;
            sDel--;
        }

        if (t[j] == "#") {
            tDel++;
            j--;
        } else if (tDel > 0) {
            j--;
            tDel--;
        }

    }
    return true;
};