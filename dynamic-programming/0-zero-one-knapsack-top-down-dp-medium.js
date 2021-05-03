// Bottom-up Dynamic Programming

let solveKnapsack = function (profits, weights, capacity) {
    const dp = []

    function knapsackRecursive(profits, weights, capacity, currentIndex) {
        // base case checks
        if (capacity <= 0 ||currentIndex >= profits.length) return 0

        // initialize each memoization
        dp[currentIndex] = dp[currentIndex] || []

        if (typeof dp[currentIndex][capacity] !== 'undefined') {
            return dp[currentIndex][capacity]
        }

        // recursive call after choosing teh element at the currentIndex
        // if the weight of the element at currentIndex exceeeds the capacity, we sohuldn't process this
        let profit1 = 0
        if (weights[currentIndex] <= capacity) {
            profit1 =
                profits[currentIndex] +
                knapsackRecursive(profits, weights, capacity - weights[currentIndex], currentIndex + 1)
        }

        // recursive call after excluding the element at the currentIndex
        const profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1)

        dp[currentIndex][capacity] = Math.max(profit1, profit2)

        return dp[currentIndex][capacity]
    }

    return knapsackRecursive(profits, weights, capacity, 0)
}

const items = ['Apple', 'Orange', 'Banana', 'Melon']
const profits = [4,5,3,7]
const weigths = [2,3,1,4]


