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
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode* temp = list1;
        ListNode* temp2 = list2;
        ListNode* list3 = new ListNode();
        ListNode* temp3 = list3;
        if (!temp && !temp2) {
            list3 = nullptr;
        }
        while (temp || temp2) {
            if ((temp && temp2 && temp->val <= temp2->val) || temp && !temp2) {
                temp3->val = temp->val;
                temp = temp->next;
            } else {
                temp3->val = temp2->val;
                temp2 = temp2->next;
            }
            if (temp || temp2) {
                temp3->next = new ListNode();
                temp3 = temp3->next;
            }
        }
        return list3;
    }
};