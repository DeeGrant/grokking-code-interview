class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

function find_cycle_start(head) {
    let cycle_length = 0
    let slow = head
    let fast = head

    // find the LinkedList cycle
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next

        // found the cycle
        if (slow === fast) {
            cycle_length = calculate_cycle_length(slow)
            break
        }
    }

    return find_start(head, cycle_length)
}

function calculate_cycle_length(slow) {
    let current = slow
    let cycle_length = 0

    while (true) {
        current = current.next
        cycle_length++
        if (current === slow) {
            break
        }
    }

    return cycle_length
}

function find_start(head, cycle_length) {
    let pointer1 = head
    let pointer2 = head

    // move pointer2 ahead 'cycle_length' nodes
    while (cycle_length > 0) {
        pointer2 = pointer2.next
        cycle_length--
    }

    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }

    return pointer1
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(`The start of the cyle is at: ${find_cycle_start(head)}`)

// Time complexity
// O(N)

// Space complexity
// O(1)