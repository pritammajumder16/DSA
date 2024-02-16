var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;
    while (start < end) {
        maxArea = Math.max(maxArea, ((end - start) * Math.min(height[start], height[end])));
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return maxArea;
};