class Solution {
public:
    bool isHappy(int n) {
        int hn;
        std::vector<int> arrOfNums;
        if(n==1){
            return true;
        }
        while(true){
            hn=0;
            while(n){
                hn=hn+pow(n%10,2);
                n=n/10;
            }
            n=hn;
            if(std::find(arrOfNums.begin(), arrOfNums.end(), n)!=arrOfNums.end()){
                return false;
            }
            else if(n==1){
                return true;
            }
            arrOfNums.push_back(n);
        }
    }
};
