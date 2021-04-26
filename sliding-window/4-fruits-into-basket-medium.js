function fruits_into_baskets(fruits) {
    let windowStart = 0
    let maxLength = 0
    let fruitFrequency = {}

    // extend the range of the window
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        const rightFruit = fruits[windowEnd]
        if(!(rightFruit in fruitFrequency)) {
            fruitFrequency[rightFruit] = 0
        }
        fruitFrequency[rightFruit]++

        // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
        while (Object.keys(fruitFrequency).length > 2) {
            const leftFruit = fruits[windowStart]
            fruitFrequency[leftFruit]--
            if (fruitFrequency[leftFruit] === 0) {
                delete fruitFrequency[leftFruit]
            }
            windowStart++ // slide the window
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
    }

    return maxLength
}

console.log(`Maximum number of fruits: ${fruits_into_baskets('A', 'B', 'C', 'A', 'C')}`)
console.log(`Maximum number of fruits: ${fruits_into_baskets('A', 'B', 'C', 'B', 'B', 'C')}`)