/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let bracketRelations = {
        "[": "]",
        "{": "}",
        "(": ")",
    }
    let keepStack = []
    for(let i = 0; i < s.length; i++){
        if (bracketRelations[s[i]]) {
            keepStack.push(s[i])
        } else {
            let correctChar = keepStack.pop()
            if(s[i] != bracketRelations[correctChar]){
                return false;
            }
        }
    }
    if(keepStack.length !=0)
    return false
    return true;
};