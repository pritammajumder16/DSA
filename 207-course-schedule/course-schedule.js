/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adjList = new Array(numCourses)
    let inDegree = new Array(numCourses).fill(0)
    prerequisites.forEach(ele=>{
        if(!adjList[ele[1]])adjList[ele[1]]=[]
        adjList[ele[1]].push(ele[0])
        inDegree[ele[0]]++;
    })  
    let stack = []
    inDegree.forEach((ele,index)=>{
        if(ele == 0)
            stack.push(index)
    })
    while(stack.length){
        let currentElement= stack.pop();
        adjList[currentElement]?.forEach(elem=>{
            inDegree[elem]--;
            if(inDegree[elem]==0){
                stack.push(elem)
            }
        })
    }
    for(let i = 0; i<inDegree.length;i++){
        if(inDegree[i]>0){
            return false
        }
    }
    return true
};