const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    while (2 * index + 1 < this.heap.length) {
      let smallest = 2 * index + 1;
      let rightChild = 2 * index + 2;

      if (
        rightChild < this.heap.length &&
        this.heap[rightChild] < this.heap[smallest]
      ) {
        smallest = rightChild;
      }

      if (this.heap[index] <= this.heap[smallest]) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }

  insert(num) {
    this.heap.push(num);
    this.heapifyUp();
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }
}

let N;
let minHeap = new MinHeap();
let cnt = 0;

rl.on("line", (line) => {
  if (cnt === 0) {
    N = +line;
    cnt = N;
    return;
  }
  let row = line.trim().split(" ").map(Number);
  row.forEach((num) => {
    minHeap.insert(num);
    if (minHeap.heap.length > N) {
      minHeap.remove();
    }
  });
  cnt--;
  if (cnt === 0) {
    rl.close();
  }
}).on("close", () => {
  console.log(minHeap.remove());
});
