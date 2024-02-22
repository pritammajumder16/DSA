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
    for(let char of s){
        if (bracketRelations[char]) {
            keepStack.push(char)
        } else {
            let correctChar = keepStack.pop()
            if(char != bracketRelations[correctChar]){
                return false;
            }
        }
    }
    return keepStack.length === 0;
};