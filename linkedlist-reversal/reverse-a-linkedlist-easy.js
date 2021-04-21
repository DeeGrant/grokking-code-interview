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

function reverse(head) {
    let current = head
    let previous = null

    while (current != null) {
        let next = current.next // temporarily store the next node
        current.next = previous // reverse the current node

        previous = current // before we move to the next node, point previous to the current node
        current = next // move to the next node
    }
    return previous
}

const head = new Node(2, new Node(4, new Node(6, new Node(8, new Node(10)))))

process.stdout.write(`Nodes of original LinkedList are: `)
head.print_list()

reverse(head)

process.stdout.write(`Nodes of reversed LinkedList are: `)
head.print_list()


// Time complexity
// O(n)

// Space complexity
// O(1)