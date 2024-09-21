function maxOperations(nums, k) {
    let map = new Map();  // Map to store the count of each number
    let count = 0;        // To store the number of valid pairs
    
    // Iterate through the array
    for (let num of nums) {
        let complement = k - num;
        
        // Check if the complement exists in the map and is available
        if (map.get(complement) > 0) {
            count++;  // We've found a pair
            map.set(complement, map.get(complement) - 1);  // Decrease the complement's count
        } else {
            // If complement isn't available, add the number to the map
            map.set(num, (map.get(num) || 0) + 1);
        }
    }
    
    return count;  // Return the number of valid pairs
}
