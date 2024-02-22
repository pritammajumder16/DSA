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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const levelOrder = findLevelOrderBFS(root);
    console.log(levelOrder)
    return levelOrder;
};
const findLevelOrderBFS = (node) => {
    const levelQueue = [node];
    const treeInArr = [[node.val]];
    while (levelQueue.length != 0) {
        let length = levelQueue.length;
        let count = 0;
        while (count < length) {
            let currentNode = levelQueue.shift()
            if (currentNode.left) {
                levelQueue.push(currentNode.left);
                treeInArr
            }
            if (currentNode.right) levelQueue.push(currentNode.right);
            count++;
        }
        const arr = []
        levelQueue.forEach(ele=>{
            arr.push(ele.val)
        })
        if(arr.length)
        treeInArr.push(arr)
    }
    return treeInArr;
}