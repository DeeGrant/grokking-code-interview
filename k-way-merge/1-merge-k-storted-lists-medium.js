// combine k lists into a sorted array

// sort the lists - already sorted?
// push the min element into a minHeap
// pop smallest element from minHeap
// add element from list just popped


const Heap = require('./collections/heap') //http://www.collectionsjs.com

class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }

    print_list() {
        let temp = this
        while (temp !== null) {
            process.stdout.write(`${temp.value} `)
            temp = temp.next
        }
        console.log()
    }
}

function merege_lists(lists) {
    const minHeap = new Heap([], null, (a,b) => b.value - a.value) // descending sort

    // put the root of each list in the min heap
    lists.forEach(a => {
        if (a !== null) {
            minHeap.push(a)
        }
    })

    // take the smallest(top) element from the min-heap and add it to the result
    // if the top element has a next element add it to the heap
    let resultHead = null
    let resultTail = null

    while(minHeap.length > 0) {
        // smallest remaining element
        const node = minHeap.pop()

        if (resultHead === null) {
            // populate the first element in result
            resultHead = resultTail = node
            // above same as
            // resultHead = node
            // resultTail = node
        } else {
            // update the tail
            resultTail.next = node
            resultTail = resultTail.next
        }

        if (node.next !== null) {
            // add the next element from the selected node linked list
            minHeap.push(node.next)
        }
    }

    return resultHead
}

function create_linked_list(arr) {
    // generates linkedList from the end to the beginning
    let head = new Node(arr.pop())

    while (arr.length) {
        // create the 'previous' node
        let previous = new Node(arr.pop())

        // add the 'previous' node to the front of our linked list
        previous.next = head

        // update the head node
        head = previous
    }

    return head
}

let list1 = create_linked_list([1, 3, 6])
let list2 = create_linked_list([2, 6, 7])
let list3 = create_linked_list([3, 4, 8])

let sortedList = merege_lists([list1, list2, list3])

console.log('The merged sorted list: ')
console.log(sortedList.print_list())


// Time complexity
// O(N * logK)
// K -> number of lists to combine

// Space complexity
// O(K)
