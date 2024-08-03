const readline = require('readline');
const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "hamjihyeon/week07/test.txt";

const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
});

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.up(this.heap.length - 1);
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.down(0);
        return min;
    }

    up(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            this.up(parentIndex);
        }
    }

    down(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }
        if (smallest !== index) {
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            this.down(smallest);
        }
    }

    size() {
        return this.heap.length;
    }
}

function findNthLargest(matrix, N) {
    const minHeap = new MinHeap();
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (minHeap.size() < N) {
                minHeap.insert(matrix[i][j]);
            } else if (matrix[i][j] > minHeap.heap[0]) {
                minHeap.extractMin();
                minHeap.insert(matrix[i][j]);
            }
        }
    }
    return minHeap.extractMin();
}

let N;
const matrix = [];

rl.on('line', (line) => {
    if (N === undefined) {
        N = parseInt(line.trim());
    } else {
        matrix.push(line.trim().split(' ').map(Number));
        if (matrix.length === N) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    console.log(findNthLargest(matrix, N));
});
