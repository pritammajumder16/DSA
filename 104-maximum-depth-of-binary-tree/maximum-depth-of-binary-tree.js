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
    totalDepth = 0;
    DFStoFindDepth(root,1);
    return totalDepth;
};
let totalDepth=0;
 //Inorder
const  DFStoFindDepth=(node,depth)=>{
    if(!node) return;
    if(node.left){
        DFStoFindDepth(node.left,depth+1)
    }
    if(node.right){
        DFStoFindDepth(node.right,depth+1)
    }
    if(depth>totalDepth) totalDepth = depth;
    return depth;
 }