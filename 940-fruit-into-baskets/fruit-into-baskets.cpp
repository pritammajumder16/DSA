class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int count = 0,firstIndex=-1,lastIndex=-1,index=0,actualCount=0,lastingCount=1;
        for(auto i = fruits.begin();i!=fruits.end();i++,index++){           if(actualCount<count){
            actualCount=count;
            }
            if(firstIndex<0&&lastIndex<0){
                firstIndex=index;
            }
            count++;
           if(firstIndex>=0 && lastIndex<0&&
            fruits[firstIndex]!=*i)
            {
                lastIndex=index;  
            }   
            if(firstIndex>=0&&lastIndex>=0&&
            fruits[firstIndex]!=*i&&
                fruits[lastIndex]!=*i){
                firstIndex=index-lastingCount;
                if(firstIndex!=index){
                    lastIndex=index;
                    }
                else{
                    lastIndex=-1;
                }
                count=1+lastingCount;
                lastingCount=0;
            }
            
            if(i!=fruits.begin()&&
            (fruits[index-1]==fruits[index])){
                lastingCount++;
            }else{
                lastingCount=1;
            }
        }
        if(actualCount==0||actualCount<count){
            actualCount=count;
        }
        return actualCount;
    }
};