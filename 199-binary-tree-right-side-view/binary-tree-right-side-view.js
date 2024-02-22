/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 //BFS SOLUTION
var rightSideView = function(root) {
    if(!root) return []
    const bfsQueue = [root];
    const rightMostValues = []
    while(bfsQueue.length){
        let count = 0;
        const levelNumberOfNodes = bfsQueue.length;
        let rightMostNode= null;
        while(count<levelNumberOfNodes){
            const currentNode = bfsQueue.shift()
            if(!rightMostNode)
            rightMostNode = currentNode;
            if(currentNode.right){
                bfsQueue.push(currentNode.right)
            }
            if(currentNode.left){
                bfsQueue.push(currentNode.left)
            }
            count++;
        }
        if(rightMostNode) rightMostValues.push(rightMostNode.val)
    }
    return rightMostValues;
};
