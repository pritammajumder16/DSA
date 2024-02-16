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
    ListNode* swapPairs(ListNode* head) {
        ListNode *slow = head;
        if(!slow){
            return head;
        }
        ListNode *fast = head->next;
        while(fast){
            int temp = fast->val;
            fast->val = slow->val;
            slow->val = temp;
            if(fast->next && fast->next->next){
                slow=fast->next;
                fast=slow->next;
            }
            else{
                return head;
            }
        }
        return head;
    }
};