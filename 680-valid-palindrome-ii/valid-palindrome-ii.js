/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let obj= checkPalindromeAndReturnIndex(s,0,s.length-1)
    if(obj.check==false){
        if(checkPalindromeAndReturnIndex(s,obj.startIndex+1,obj.endIndex).check){
            return true;
        }else if(checkPalindromeAndReturnIndex(s,obj.startIndex,obj.endIndex-1).check){
            return true;
        }
        else return false;
    }
    return true;
};

const checkPalindromeAndReturnIndex = function(s,start,end){
 let length = Math.floor((start+end+1)/2);
 for (let i = start, j=end; i <length;i++,j--){
        if(s[i]!=s[j]){
            return {check: false, startIndex: i, endIndex: j}
        }
    }
    return {check:true}
}