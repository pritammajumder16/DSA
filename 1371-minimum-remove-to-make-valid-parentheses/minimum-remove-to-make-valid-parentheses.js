/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i)
        } else if (s[i] == ")") {
            let charAtPop = stack.pop()
            if (!charAtPop && charAtPop !=0) {
                s = s.substring(0, i) + s.substring(i + 1, s.length);
                i--;
            }
        }
        
    }
    if (!stack.length == 0) {
        for (let j = stack.length - 1; j >= 0; j--) {
            s = s.substring(0, stack[j]) + s.substring(stack[j] + 1, s.length)
        }
    }
    return s;
};