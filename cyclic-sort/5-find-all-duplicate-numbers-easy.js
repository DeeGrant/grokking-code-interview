function find_all_duplicates(nums) {
    let i = 0
    let n = nums.length
    while (i < n) {
        let j = nums[i] - 1
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }

    const duplicateNumbers = []
    for (i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            duplicateNumbers.push(nums[i])
        }
    }

    return duplicateNumbers
}

// Time complexity
// O(n)

// Space complexity
// O(1)