// 1...n

function find_missing_number(nums) {
    let i = 0
    const n = nums.length

    while (i < n) {
        let j = nums[i] - 1
        if (nums[i] < n && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]] // swap
        } else {
            i++
        }
    }
    const missingNumbers = []

    for (i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            missingNumbers.push(i + 1)
        }
     }

    return missingNumbers
}

// Time complexity
// O(n) + O(n-1) + O(n) = O(n)

// Space complexity
// O(1)
// because algorithm expects an output array