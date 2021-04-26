// BFS - Breadth First Search

// don't allow duplicate sets in output

function find_subsets(nums) {
    // sort the numbers to handle duplicates
    nums.sort((a,b) => a - b) // ascending sort

    const subsets = []
    subsets.push([])

    let startIndex = 0
    let endIndex = 0

    for (let i = 0; i < nums.length; i++) {
        // reset to copying entire subset
        startIndex = 0

        // if current and previous elements are the save, create subset only for the subsets
        // added in teh previous step
        if (i > 0 && nums[i] === nums[i - 1]) {
            // shrink out subset to only include the previous subset
            startIndex = endIndex + 1
        }

        // update the end of the subset
        endIndex = subsets.length - 1

        for (let j = startIndex; j < endIndex + 1; j++) {
            // create a new subset from the existing subset and add the current element to it
            const set1 = subsets[j].slice(0)
            set1.push(nums[i])
            subsets.push(set1)
        }
    }

    return subsets
}

console.log('Here is the list of subsets: ')
let result = find_subsets([1,3,3])
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