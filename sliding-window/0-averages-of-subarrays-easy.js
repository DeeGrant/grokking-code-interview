function find_average_of_subarrays(k, arr) {
    const result = []
    let windowSum = 0.0
    let windowStart = 0

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd] // add the next element

        // sliding the window, we don't need to slide if we haven't hit the required window size of 'k'
        if (windowEnd >= k - 1) {
            result.push(windowSum / k) // add average to result array
            windowSum -= arr[windowStart] // subtract the element going out the window
            windowStart++ // slide the window
        }
    }

    return result
}

const averages = find_average_of_subarrays(5, [1,3,2,6,-1,4,1,8,2])
console.log(`Averages of subarrays of size K=5: ${averages}`)
