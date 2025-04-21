"use strict";

console.log("Graph data structure");

// Graph:

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add a vertex:
  addVertex(value) {
    if (!this.adjacencyList[value]) this.adjacencyList[value] = [];
  }

  //   add edge

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  //   remove edge

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  //   remove Vertex

  removeVertex(vertex) {}
}

const g = new Graph();

g.addVertex("Tokyo");
g.addVertex("New York");
g.addVertex("Delhi");

g.addEdge("Tokyo", "Delhi");
g.addEdge("Tokyo", "New York");
g.addEdge("Delhi", "New York");

g.removeEdge("Delhi", "New York");

console.log(g);

// const a = {
//   delhi: ["tokyo", "new york"],
//   tokyo: ["new york", "delhi"],
//   "new york": ["delhi", "tokyo"],
// };

// const b = a["delhi"].filter((v) => v !== "tokyo");
// console.log(b);
