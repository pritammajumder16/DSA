/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//Dijasktra's algorithm


var networkDelayTime = function (times, n, k) {
    let adjList = new Array(n)
    for (let i = 0; i < times.length; i++) {
        if (!adjList[times[i][0]-1]) adjList[times[i][0]-1] = []
        adjList[times[i][0]-1].push([times[i][1]-1, times[i][2]])
    }
    const heap = []
    heap.push(k-1)
    let distances = new Array(n).fill(Infinity)
    distances[k-1] = 0;
    while (heap.length) {
        const currentElement = heap.pop();
        adjList[currentElement]?.forEach((element) => {
            //element[0] - Neighbouring vertex element[1]weight to it
            if(distances[element[0]]>distances[currentElement]+element[1]){
                distances[element[0]]=distances[currentElement]+element[1];
                heap.push(element[0])
            }
        })
    }
    let max = Math.max(...distances) 
    return max===Infinity? -1 : max;
}