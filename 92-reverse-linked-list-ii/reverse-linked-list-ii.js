/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let leftNode = head, it = 1, beforeLeftNode = null, currentNode = null, rightNode = null, prevNode = null, afterRightNode = null;
    if (left == right) return head;
    while (it < left) {
        if (it == left - 1) {
            beforeLeftNode = leftNode;
            prevNode = beforeLeftNode;
        }
        it++;
        leftNode = leftNode.next;
    }
    it = left;
    currentNode = leftNode;
    while (it >= left && it <= right) {
        let nextNode = null;
        if (it == right) {
            rightNode = currentNode;
            afterRightNode = currentNode.next;
        }
        if (currentNode) {   //
            nextNode = currentNode.next;
            currentNode.next = prevNode;
        }
        if (it == left) {
            currentNode.next = null;
        }

        prevNode = currentNode;
        currentNode = nextNode;
        it++
    }
    if (beforeLeftNode) {
        beforeLeftNode.next = rightNode;
    } else {
        head = rightNode;
    }
    if (rightNode && rightNode.next) {
        leftNode.next = afterRightNode;
    } else {
        leftNode.next = null;
    }
    return head;
};