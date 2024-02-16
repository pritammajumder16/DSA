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
    ListNode* removeNthFromEnd(ListNode * head, int n) {
        ListNode* temp = head;
        int length = 0, i = 0, p = 0;
        while (temp) {
            temp = temp->next;
            length++;
        }
        temp = head;
        if (length == n) {
            head = head->next;
            return head;
        }
        while (temp) {
            if (i == length - n - 1) {
                ListNode* targetNode = temp->next;
                temp->next = targetNode->next;
                targetNode->next = nullptr;
                delete targetNode;
                break;
            }
            temp = temp->next;
            i++;
        }
        return head;
    }
};