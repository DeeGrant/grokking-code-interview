// Top-down Dynamic Programming

let solveKnapsack = function (profits, weights, capacity) {
    const n = profits.length

    // base cases
    if (capacity <= 0 || n === 0 || weights.length !== n) return 0

    const dp = Array(capacity + 1).fill(0)

    // if we have one weight, we will take it if it is not more than the capacity
    for (let c = 0; c < capacity; c++) {
        if (weights[0] <= c) dp[c] = profits[0]
    }

    // process all sub-arrays for all the capacities
    for (let i = 1; i < n; i++) {
        for (let c = capacity; c >= 0; c--) {
            let profit1 = 0
            let profit2 = 0

            // include the item, if it is not more than the capacity
            if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]]

            // exclude item
            profit2 = dp[c]

            // take maximum
            dp[c] = Math.max(profit1, profit2)
        }
    }

    // maximum profit will be at the bottom-right corner
    return dp[capacity]
}

const profits = [1, 6, 10, 16]
const weigths = [1, 2, 3, 5]

console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weigths, 7)}`)
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weigths, 6)}`)


// Time complexity
//

// Space complexity
//