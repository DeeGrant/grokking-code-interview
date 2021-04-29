// charged per foot to connect lengths of rope
// find the minimum cost to connect all ropes
// min cost function -> continually connecting the two smallest length ropes


const Heap = require('./collections/heap') //http://www.collectionsjs.com

function minimal_cost_to_connect_ropes(ropeLengths) {
    // add all ropes to the min heap
    const minHeap = new Heap(ropeLengths, null, (a,b) => b - a) // descendingn sort

    // go through the values of the heap, in each step take top (i.e., lowest) rope lengths from the min heap
    // connect them and push the totalCost back to the main heap.
    // keep doing this until the heap is left with only one rope

    let totalCost = 0
    while (minHeap.length > 0) {
        const cost = minHeap.pop() + minHeap.pop()
        totalCost += cost
        minHeap.push(cost)
    }

    return totalCost
}

console.log(`Minimum cost to connect ropes: ${minimal_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimal_cost_to_connect_ropes([3, 4, 5, 11, 6])}`)
console.log(`Minimum cost to connect ropes: ${minimal_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)

// Time complexity
// O(N * logN)

// Space complexity
// O(N)
