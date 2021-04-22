// const Deque = require('.collections/deque') //http://www.collectionsjs.com

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


function traverse(root) {
    const result = []
    if (root === null) {
        return result
    }

    // TODO add Deque
    // const queue = new Deque()
    const queue = []
    queue.push(root)

    while (queue.length > 0) {
        const levelSize = queue.length
        const currentLevel = []
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()
            // add the node to the current level
            currentLevel.push(currentNode.val)
            // insert the children of the current node in the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.push(currentLevel)
    }

    return result
}

let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level order traversal: ${traverse(root)}`)

// n = nodes in the tree

// Time complexity
// O(n)

// Space complexity
// O(n/2) = O(n)

// n/2 = max width of the tree
