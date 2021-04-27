// HashMap
// Time complexity
// O(N)
// Space complexity
// O(N)

function find_single_number(arr) {
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        num ^= arr[i]
        // console.log([arr[i].toString(2), num.toString(2)])
    }
    return num
}

console.log(`Missing number: ${find_single_number([1,4,2,1,3,2,3])}`)

// Time complexity
// O(N)

// Space complexity
// O(1)