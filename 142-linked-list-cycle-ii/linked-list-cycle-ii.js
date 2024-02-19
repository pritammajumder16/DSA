/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let currentNode = head;
    let checkSet= new Set();
    while(currentNode){
        if(!checkSet.has(currentNode)){
            checkSet.add(currentNode);
        }else{
            return currentNode
        }
        currentNode=currentNode.next;
    }
    return null;
};