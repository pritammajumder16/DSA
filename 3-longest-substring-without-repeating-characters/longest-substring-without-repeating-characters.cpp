class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        string a = "" ;
        int longCount=0,currCount=0,firstIndex=0, findIndex=-1;
        for(int i = 0; i<s.length(); i++){
            findIndex=a.find(s[i]);
            if(findIndex!= string::npos){
                firstIndex=firstIndex+findIndex+1;
                i=firstIndex;
                a=s[i];
                if(longCount<currCount){
                    longCount=currCount;
                }
                currCount=1;
            }else{
                a=a+s[i];
                currCount++;
            }
        }
        if(longCount<currCount){
            longCount=currCount;
        }
        return longCount;
    }
};