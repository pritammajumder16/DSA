class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int m = nums1.size(),n= nums2.size(),i=0,j=0;
        vector<int> mergedArray;
        while( i <m || j<n)
        {
            if(j>=n||(i<m&&nums1[i]<nums2[j])){
                mergedArray.push_back(nums1[i]);
                i++;
            }else if(j<n){
                mergedArray.push_back(nums2[j]);
                j++;
            }
        }
       if((m+n)%2!=0){
            return mergedArray[(m+n)/2];
        }else{
            return double((mergedArray[((m+n)/2)-1]+mergedArray[((m+n)/2)]))/2;
        }
    }
};