/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let currentPointer = 0;
    for(let i = 0;i<t.length;i++){
        if(t[i]==s[currentPointer]){
            currentPointer++;
        }

    }
    if(currentPointer==s.length){
        return true
    }
    return false
};