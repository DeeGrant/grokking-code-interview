// X + Y + Z = 0
// Y + Z = -X


function search_triplets(arr) {
    arr.sort((a,b) => a - b)
    const triplets = []

    for (let i = 0; i < arr.length; i++) {

        // skip same element to avoid duplicate triplets
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }

        // pass in -X
        search_pair(arr, -arr[i], i + 1, triplets)
    }

    return triplets
}

// search for Y and Z
// using two pointers
function search_pair(arr, target_sum, left, triplets) {
    let right = arr.length - 1

    while (left < rigth) {
        // sum Y and Z
        const current_sum = arr[left] + arr[right]

        // found the triplet
        if (current_sum === target_sum) {
            triplets.push([-target_sum, arr[left], arr[right]])
            left++
            right--

            while (left < right && arr[left] === arr[left - 1]) {
                // skip same element to avoid duplicate triplets
                left++
            }

            while (left < right && arr[right] === arr[right - 1]) {
                // skip same element to avoid duplicate triplets
                right--
            }

        } else if (target_sum > current_sum) { // slide & shrink our window to find our sum
            // we need a pair with a bigger sum
            left++
        } else {
            // we need a pair with a smaller sum
            right--
        }
    }
}



// Time complexity
// sorting array -> O(N * logN)
// search_pair  -> O(N)
// search_triplets -> calling search_pair for every number in array -> O(N * logN + N^2) -> O(N^2)

// compared to brute force -> O(N^3)

// Space complexity
// O(N)
// ignoring space for the output array



