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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return null;
    return DFStoFindDepth(root,0);
};
 //Inorder
const  DFStoFindDepth=(node,depth)=>{
    if(!node) return;
    depth++;
    let leftDepth = depth;
    let rightDepth = depth;
    if(node.left){
        leftDepth = DFStoFindDepth(node.left,depth)
    }
    if(node.right){
        rightDepth = DFStoFindDepth(node.right,depth)
    }
    return Math.max(leftDepth,rightDepth);
 }