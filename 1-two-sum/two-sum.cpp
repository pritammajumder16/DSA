class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        if(nums.size()<2){
            return result;
        }
        for(int i = 0; i < nums.size();i++){
            for (int j = i+1; j<nums.size();j++){
                if(nums[i]+nums[j]==target){
                   result.push_back(i);
                   result.push_back(j);
                   break;
                }
            }
            if(result.size()>0) break;
        }
        return  result;
    }
};