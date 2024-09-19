/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = {a:true,e:true,i:true,o:true,u:true,A:true,E:true,I:true,O:true,U:true}
    let wordToReverse=""
    const positionOfAlphabets=[]
    for(let i = 0;i<s.length;i++){
        if(vowels[s[i]]){
            wordToReverse+=s[i]
            positionOfAlphabets.push(i)
        }
    }
    wordToReverse=wordToReverse.split("").reverse().join("")
    const tempS=s.split("")
     for(let i = 0;i<positionOfAlphabets.length;i++){
        tempS[positionOfAlphabets[i]]=wordToReverse[i]
    }
    return tempS.join("");
};