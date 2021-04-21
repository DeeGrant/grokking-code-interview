

function find_duplicate(arr) {
    let slow = arr[0]
    let fast = arr[0]

    // TODO review this pattern
    // why is this needed?
    while (slow !== fast) {
        slow = arr[slow]
        // console.log('slow ', slow)
        fast = arr[arr[fast]]
    }

    // find cycle length
    let current = arr[arr[slow]]
    let cycleLength = 1
    while (current !== arr[slow]) {
        current = arr[current]
        cycleLength++
    }

    return find_start(arr, cycleLength)
}

function find_start(arr, cycleLength) {
    let pointer1 = arr[0]
    let pointer2 = arr[0]

    // move pointer2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
        pointer2 = arr[pointer2]
        cycleLength--
    }

    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
        pointer1 = arr[pointer1]
        pointer2 = arr[pointer2]
    }

    return pointer1
}

console.log(find_duplicate([1,4,4,3,2]))

// Time complexity
// O(n)

// Space complexity
// O(1)
