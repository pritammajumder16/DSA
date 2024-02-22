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
//           BFS SOLUTION
// var rightSideView = function(root) {
//     if(!root) return []
//     const bfsQueue = [root];
//     const rightMostValues = []
//     while(bfsQueue.length){
//         let count = 0;
//         const levelNumberOfNodes = bfsQueue.length;
//         let rightMostNode= null;
//         while(count<levelNumberOfNodes){
//             const currentNode = bfsQueue.shift()
//             if(!rightMostNode)
//             rightMostNode = currentNode;
//             if(currentNode.right){
//                 bfsQueue.push(currentNode.right)
//             }
//             if(currentNode.left){
//                 bfsQueue.push(currentNode.left)
//             }
//             count++;
//         }
//         if(rightMostNode) rightMostValues.push(rightMostNode.val)
//     }
//     return rightMostValues;
// }


//              DFS Solution
var rightSideView = function (root) {
    if (!root) return [];
    const result = []
     dfsRightSideView(root, 0, result);
     return result;
}
const dfsRightSideView = (root, currentLevel, result) => {
    if (!root) return;
    currentLevel++;
    if (result[currentLevel-1]==undefined) {
        result[currentLevel-1]=root.val;
    }
    console.log(root, currentLevel, result, root.right)
    if (root.right) {
        dfsRightSideView(root.right, currentLevel, result)
    }
    if (root.left) {
        dfsRightSideView(root.left, currentLevel, result)
    }

    return 1;

}