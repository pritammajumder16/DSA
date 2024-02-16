/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        ListNode* finalList = new ListNode();
     
        vector<int> vec;
        int i = 0;
        for(auto list = lists.begin();list!=lists.end();list++){
            ListNode *temp = lists[i];
            while(temp!=nullptr){
                vec.push_back(temp->val);
                temp=temp->next;
            }
            i++;
        }
        if(vec.size()==0){
            finalList= nullptr;
        }
        sort(vec.begin(),vec.end());
        ListNode *temp = finalList;
        for(int i=0;i<vec.size();i++){
            temp->val=vec[i];
            if(i!=(vec.size()-1)){
                temp->next = new ListNode();
                temp=temp->next;

            }
        }
     
        return finalList;
    }
};