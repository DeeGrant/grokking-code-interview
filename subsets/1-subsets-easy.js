// BFS - Breadth First Search

function find_subsets(nums) {
    const subsets = []

    // start by adding the empty subset
    subsets.push([])

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i]

        // we will take all existing subsets and insert thecurrent number in them to create new subsets
        const n = subsets.length
        for (let j = 0; j < n; j++) {
            // create a new subset from the existing subset and insert the current element to it
            const set1 = subsets[j].slice(0) // clone the sets
            set1.push(currentNumber)
            subsets.push(set1)
        }
    }

    return subsets
}

console.log('Here is the list of subsets: ')
let result = find_subsets([1,3])
result.forEach(subset => {
    console.log(subset)
})

console.log('Here is the list of subsets: ')
result = find_subsets([1,5,3])
result.forEach(subset => {
    console.log(subset)
})

// Time complexity
// O(N * 2^N)

// the number of subsets doubles as we add each element -> O(2^N)
// N = number of elements in initial set


// Space complexity
// O(N * 2^N)

// all additional space is used for the output list
// 2^N subsets
// N max space of each subset
