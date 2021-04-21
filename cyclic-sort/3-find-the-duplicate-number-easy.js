function find_duplicate(nums) {
    let i = 0

    while (i < nums.length) {
        if (nums[i] !== i + 1) {

            let j = nums[i] - 1
            if (nums[i] !== nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]] // swap
            } else { // found the duplicate
                return nums[i]
            }
        } else {
            i++
        }
    }

    return -1
}

// Time complexity
// O(n)

// Space complexity
// O(1)
// modifies the original array