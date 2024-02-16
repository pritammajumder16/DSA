var trap = function (height) {
    let leftMax = 0;
    let current = 1;
    let totalArea = 0;
    let rightMax = Math.max(...(height.slice(current + 1, height.length)));
    let rightMaxIndex = height.slice(current + 1, height.length).indexOf(rightMax)
    while (current < height.length - 1) {
        if (height[current] < height[leftMax] && height[current] < rightMax) {
            totalArea += Math.min(rightMax, height[leftMax]) - height[current];
            current++;
        } else {
            leftMax = current;
            current++;
        }
        if (current >= rightMaxIndex) {
            rightMax = 0;
            for (let i = current + 1; i < height.length; i++) {
                if (height[i] > rightMax) {
                    rightMax = height[i]
                    rightMaxIndex = i;
                }
            }
        }
    }
    return totalArea;
};