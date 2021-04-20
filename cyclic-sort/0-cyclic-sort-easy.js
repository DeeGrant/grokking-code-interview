function cyclic_sort(nums) {
    let i = 0
    while(i < nums.length) {
        const j = nums[i] - 1
        if (nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]] // swap
        } else {
            i++
        }
    }
    return nums
}

// O(n)