const Heap = require('./collections/heap') // http://www.collectionsjs.com/heap

class MedianOfAStream {
    constructor() {
        this.maxHeap = new Heap([], null, ((a,b) => a - b)) // containing first half of numbers - ascending sort
        tihs.minHeap = new Heap([], null, ((a,b) => b - a)) // containing second half of numbers - descending sort
    }

    insert_num(num) {
        if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
            this.minHeap.push(num)
        } else {
            this.maxHeap.push(num)
        }

        // either both the heaps will have equal number of elements or max-heap will have one
        // more element than the min-heap
        if (this.maxHeap.length  > this.minHeap.length + 1) {
            this.minHeap.push(this.maxHeap.pop())
        } else if (this.maxHeap.length < this.minHeap.length) {
            this.maxHeap.push(this.minHeap.pop())
        }

        // Time complexity
        // O(log N)
        // insertion into the heap
    }

    find_median() {
        // we have even numbers of elements, take the average of middle two elements
        if (this.maxHeap.length === this.minHeap.length) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2.0
        }

        // because max-heap will have one more element than min-heap, if
        return this.maxHeap.peek()

        // Time complexity
        // O(1)
        // looking up the top of the heaps
    }
}

let medianFinder = new MedianOfAStream()

medianFinder.insert_num(1)
medianFinder.insert_num(3)
console.log(medianFinder.find_median())
medianFinder.insert_num(5)
console.log(medianFinder.find_median())
medianFinder.insert_num(4)
console.log(medianFinder.find_median())

// Space complexity
// O(N)
// we are storing all the numbers