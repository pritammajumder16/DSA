/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//Dijasktra's algorithm
class PQ {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

    size() {
        return this._heap.length;
    }
    push(value) {
        this._heap.push(value);
        this._siftUp();

        return this.size();
    }

    _siftUp() {
        let nodeIdx = this.size() - 1;

        while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
            this._swap(nodeIdx, this._parent(nodeIdx));
            nodeIdx = this._parent(nodeIdx);
        }
    }

    _parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    _leftChild(idx) {
        return idx * 2 + 1;
    }

    _rightChild(idx) {
        return idx * 2 + 2;
    }

    _siftDown() {
        let nodeIdx = 0;

        while (
            (this._leftChild(nodeIdx) < this.size() &&
                this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
            (this._rightChild(nodeIdx) < this.size() &&
                this._compare(this._rightChild(nodeIdx), nodeIdx))
        ) {
            const greaterChildIdx =
                this._rightChild(nodeIdx) < this.size() &&
                    this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
                    ? this._rightChild(nodeIdx)
                    : this._leftChild(nodeIdx);

            this._swap(greaterChildIdx, nodeIdx);
            nodeIdx = greaterChildIdx;
        }

    }
    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }

        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
}

var networkDelayTime = function (times, n, k) {
    let adjList = new Array(n)
    for (let i = 0; i < times.length; i++) {
        if (!adjList[times[i][0]-1]) adjList[times[i][0]-1] = []
        adjList[times[i][0]-1].push([times[i][1]-1, times[i][2]])
    }
    const heap = new PQ((a, b) => distances[a] < distances[b])
    heap.push(k-1)
    let distances = new Array(n).fill(Infinity)
    distances[k-1] = 0;
    while (heap.size()) {
        const currentElement = heap.pop();
        adjList[currentElement]?.forEach((element) => {
            //element[0] - Neighbouring vertex element[1]weight to it
            if(distances[element[0]]>distances[currentElement]+element[1]){
                distances[element[0]]=distances[currentElement]+element[1];
                heap.push(element[0])
            }
        })
    }
    console.log(distances)
    let max = Math.max(...distances) 
    return max===Infinity? -1 : max;
}