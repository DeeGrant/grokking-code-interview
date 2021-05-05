// Vocab - to Anki
// Sink - node with only incoming edges and no outgoing edges
// Source - node with no incoming edges and only outgoing edges
// DAG - Directed Acyclic Graph - no cyclic dependencies in the graph
// BFS - Breadth First Search
// HashMap
// Queue


const Deque = require('./collections/deque') //http://www.collectionsjs.com

function topological_sort(vertices, edges) {
    const sortedOrder = []
    if (vertices <= 0) {
        return sortedOrder
    }

    // a. Initialize the graph
    const inDegree = Array(vertices).fill(0) // count of incoming edges - simplified hashmap
    const graph = Array(vertices).fill(0).map(() => Array()) // adjacency list graph

    // b. Build the graph
    edges.forEach(edge => {
        let parent = edge[0]
        let child = edge[1]
        graph[parent].push(child) // put the child into it's parent's list
        inDegree[child]++ // increment child's inDegree
    })

    // c.Find all sources i.e., all vertices with 0 in-degrees
    const sources = new Deque()
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) sources.push(i)
    }

    // d. For each source, add it to the sortedOrder and subtract one form all of its children's in-degrees
    // if a child's in-degree becomes zero, add it to the sources queue
    while (sorces.length > 0) {
        const vertex = sources.shift()
        sortedOrder.push(vertex)
        graph[vertex].forEach(child => {
            // get the node's children to decement their in-degrees
            inDegree[child]--
            if (inDegree[child] === 0) sources.push(child)
        })
    }

    // topological sort is not possible as a graph has a cycle
    if (sortedOrder.length !== vertices) return []

    return sortedOrder
}

console.log(`Topological sort: ${
    topological_sort(4, [
        [3,2],
        [3,0],
        [2,0],
        [2,1]
    ])
}`)

console.log(`Topological sort: ${
    topological_sort(5, [
        [4,2],
        [4,3],
        [2,0],
        [2,1],
        [3,1]
    ])
}`)


// each vertex will be a source only once
// each edge will be accessed and removed only once
// V -> number of Vertices
// E -> number of Edges

// Time complexity
// O(V + E)

// Space complexity
// O(V + E)
