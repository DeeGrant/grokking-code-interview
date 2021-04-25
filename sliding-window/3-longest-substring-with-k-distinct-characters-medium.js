function longest_substring_with_k_distinct(str, k) {
    let windowStart = 0
    let maxLength = 0
    let charFrequency = {}

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {

        // expand window and add character on right side of window to 'charFrequency'
        const rightChar = str[windowEnd]
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0
        }
        charFrequency[rightChar]++

        // shrink the window until we are left with 'k' distinct characters into 'charFrequency'
        while (Object.keys(charFrequency).length > k) {
            const leftChar = str[windowStart]

            // decrement the character (leftChar) going out of the window
            charFrequency[leftChar]--

            // remove 'leftChar' from 'charFrequency' if decremented to zero
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar]
            }

            windowStart++ // slide the window
        }

        // remember the maximum length so far
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`)
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`)
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`)

// Time complexity
// O(N)

// Space complexity
// O(K)
// K + 1 is the number of characters in the HasMap