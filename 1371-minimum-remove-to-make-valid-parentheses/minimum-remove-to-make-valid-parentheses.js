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
            if(!stack.length){
                s[i] = "";}
                stack.pop()
        }
    }
    if (!stack.length == 0) {
        for (let j = 0; j <stack.length; j++) {
            s[stack[j]] = ""
        }
    }
    s=s.join("")
    return s;
};