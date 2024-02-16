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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* l3 = new ListNode();
        ListNode* temp1 = l1;
        ListNode* temp2 = l2;
        ListNode* temp3 = l3;
        int carry = 0;
        int num1 = 0, num2 = 0;
        int firstTime = 0;
        while (true) {
            num1 = 0;
            num2 = 0;
            if (temp1) {
                num1 = temp1->val;
                temp1 = temp1->next;
            }
            if (temp2) {
                num2 = temp2->val;
                temp2 = temp2->next;
            }
            if (firstTime == 1) {
                temp3->next = new ListNode();
                temp3 = temp3->next;
            }
            temp3->val = (num1 + num2 + carry) % 10;
            carry = (num1 + num2 + carry) / 10;

            firstTime = 1;
            if (!temp1 && !temp2) {
                if (carry) {
                    temp3->next = new ListNode();
                    temp3 = temp3->next;
                    temp3->val = carry;
                }
                return l3;
            }
        }

        return l3;
    }
};