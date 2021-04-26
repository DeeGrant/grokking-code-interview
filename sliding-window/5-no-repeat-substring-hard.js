function non_repeat_substring(str) {
    let windowStart = 0
    let maxLength = 0
    let charIndexMap = {}

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd]

        // if the map already contains the 'rightChar', move the beginning of the window
        // so that we hove only one occurrence of 'rightChar' in the window
        if (rightChar in charIndexMap) {
            // gets the max of our current window start and the previous index of 'rightChar' + 1
            // another character could have already moved the windowStart past the previous 'rightChar' index
            windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1)
        }

        // insert the index of 'rightChar' into the map
        charIndexMap[rightChar] = windowEnd

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}


console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`)
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`)
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`)

// Time complexity
// O(N)
// N = number of characters in the input string

// Space complexity
// O(K)
// K = number of distinct characters in the input string
