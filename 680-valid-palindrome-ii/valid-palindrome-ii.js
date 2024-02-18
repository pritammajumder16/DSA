/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let obj= checkPalindromeAndReturnIndex(s)
    if(obj.check==false){
        if(checkPalindromeAndReturnIndex(s.substring(0,obj.startIndex)+s.substring(obj.startIndex+1)).check){
            return true;
        }else if(checkPalindromeAndReturnIndex(s.substring(0,obj.endIndex)+s.substring(obj.endIndex+1)).check){
            return true;
        }
        else return false;
    }
    return true;
};

const checkPalindromeAndReturnIndex = function(s){
 for (let i = 0, j=s.length-1; i <Math.floor(s.length/2);i++,j--){
        if(s[i]!=s[j]){
            return {check: false, startIndex: i, endIndex: j}
        }
    }
    return {check:true}
}