class TreeNode {
    constructor(val) {
        this.val = val
        this.left = left
        this.right = right
    }
}

function hasPath(root, sum) {
    if (root === null) {
        return false
    }

    // if the current node is a leaf and its value is equal to the sum, we've found a path
    if (root.val === sum && root.left === null && root.right === null) {
        return true
    }

    // recursively call to traverse the left and right sub-tree
    // return true if any of the two recursive calls return true
    let remainder = sum - root.val
    return hasPath(root.left, remainder) || hasPath(root.rigth, remainder)
}


let root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Tree has path: ${hasPath(root, 23)}`)
console.log(`Tree has path: ${hasPath(root, 16)}`)

// Time complexity
// O(n)

// Space complexity
// O(n)