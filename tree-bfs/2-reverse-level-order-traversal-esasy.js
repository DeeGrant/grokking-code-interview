const Deque = require('.collections/deque') //http://www.collectionsjs.com

class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function traverse(root) {
    const result = new Deque()
    if (root === null) {
        return result
    }

    const queue = new Deque()
    queue.push(root)

    while (queue.length > 0) {
        let levelSize = queue.length
        let currentLevel = []

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()
            // add the node to the curent level
            currentLevel.push(currentNode.val)
            // insert the children of current node in the queue
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
        }
        result.unshift(currentLevel) // main difference from previous pattern
    }
    return result
}

let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level order reverse traversal: ${traverse(root)}`)

// n = nodes in the tree

// Time complexity
// O(n)

// Space complexity
// O(n/2) = O(n)

// n/2 = max width of the tree