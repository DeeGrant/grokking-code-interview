const Heap = require('./collections/heap') // http://www.collectionsjs.com

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    // use for max-heap
    compare(other) {
        return this.distance_from_origin() - other.distance_from_origin() // ascending sort
    }
    distance_from_origin() {
        // ignoring sqrt ot calculate the distance
        return Math.pow(this.x, 2) + Math.pow(this.y, 2)
    }
    print_point() {
        process.stdout.write(`[${this.x}, ${this.y}] `)
    }
}

function find_closest_points(points, k) {
    const maxHeap = new Heap([], null, (a,b) => a.compare(b))

    // put first 'k' points in the max heap
    for (let i = 0; i < k; i++) {
        maxHeap.push(points[i])
    }

    // go through the remaining points of the input array, if a point is closer to the origin than the top point
    // of teh max-heap, remove the top point from the heap and add the point from the input array
    for (let i = k; i < points.length; i++) {
        if (points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
            maxHeap.pop()
            maxHeap.push(points[i])
        }
    }

    // the heap has 'k' points closest to the origin, return them in a list
    return maxHeap.toArray()
}

let result = find_closest_points([new Point(1,3), new Point(3,4), new Point(2, -1)], 2)
console.log('The k closest points are: ')
result.forEach(p => p.print_point())

// Time complexity
// O(K * logK + (N - K) * logK) = O(N * logK)

// Space complexity
// O(K)