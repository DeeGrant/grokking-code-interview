// Binary search - splitting things in half

function binary_search(arr, key) {
    let start = 0
    let end = arr.length - 1
    let isAscending = arr[start] < arr[end]

    while (start <= end) {
        // the middle of the current range
        let mid = Math.floor(start + (end - start) / 2)

        // found the key
        if (key === arr[mid]) {
            // return the key's index
            return mid
        }

        // we re-split and update our search scope based on whether
        // the key is greater or less than the current ranges 'mid' value
        if (isAscending) {
            // ascending order

            if (key < arr[mid]) {
                // the 'key' can be in the first half
                end = mid - 1
            } else {
                // key > arr[mid]
                // the 'key' can be in teh second half
                start = mid + 1
            }
        } else {
            // descending order

            if (key > arr[mid]) {
                // the 'key' can be in the first half
                end = mid - 1
            } else {
                // key < arr[mid]
                // the 'key' can be in the second half
                start = mid + 1
            }
        }
    }

    // element not found
    return -1
}

// Time complexity
// O(logN)

// Space complexity
// O(1)
