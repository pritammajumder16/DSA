/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    const stack = [];
    s= s.split("")
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            stack.push(i)
        } else if (s[i] == ")") {
            let charAtPop = stack.pop()
            if (!charAtPop && charAtPop != 0) {
                s[i] = "";
            }
        }

    }
    if (!stack.length == 0) {
        for (let j = stack.length - 1; j >= 0; j--) {
            s[stack[j]] = ""
        }
    }
    s=s.join("")
    return s;
};