function find_missing_number(nums) {
    let i = 0
    const n = nums.length

    while (i < n) {
        let j = nums[i]
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]] // swap
        } else {
            i++
        }
    }

    // find the first number missing fom its index, that will be our required number
    for (i = 0; i < n; i++) {
        if (nums[i] !== i) {
            return i
        }
     }

    return n
}

// Time complexity
// O(n) + O(n-1) + O(n) = O(n)

// Space complexity
// O(1)