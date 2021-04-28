const Heap = require('./collections/heap') //http://www.collectionsjs.com

function find_k_smallest_number(nums, k) {
    const maxHeap = new Heap() // ascending order default

    // put first k numbers in the max heap
    for (let i = 0; i < k; i++) {
        maxHeap.push(nums[i])
    }

    // go through the remaining numbers of the array, if the number from the array is smaller than the
    // top(biggest) number of the heap, remove the top number from the heap and add the number from the array
    for (let i = k; i < nums.length; i++) {
        if (nums[i] < maxHeap.peek()) {
            maxHeap.pop()
            maxHeap.push(nums[i])
        }
    }

    // the root of the heap has the Kth smallest number
    return maxHeap.peek()
}

console.log(`Kth smallest number is: ${find_k_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)

// Time complexity
// O(K * logK + (N - K) * logK) = O(N * logK)

// Space complexity
// O(K)
