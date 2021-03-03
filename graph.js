// create a graph class 
class Graph { 
    // defining vertex array and 
    // adjacent list 
    constructor(noOfVertices) 
    { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); 
    } 
  
    // functions to be implemented 
  
    // addVertex(v) 
    // addEdge(v, w) 
    // printGraph() 
  
    // bfs(v) 
    // dfs(v) 
} 

// add vertex to the graph 
addVertex(v) 
{ 
    // initialize the adjacent list with a 
    // null array 
    this.AdjList.set(v, []); 
} 