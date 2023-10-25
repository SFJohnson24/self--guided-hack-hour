/*




A max-heap is a type of binary heap where the value of each parent node is greater than or equal to the values of its children nodes. In contrast to a min-heap where the smallest element is at the root, a max-heap ensures that the largest element is at the root.

Max-heaps are used in various algorithms and applications, such as:

    Priority Queues: Priority queues based on max-heaps are used when you need to extract the maximum element (highest-priority item) efficiently. This is useful in scenarios like task scheduling or job processing, where tasks with higher priorities should be executed first.

    Heap Sort: Heap sort is an efficient sorting algorithm that uses the properties of a max-heap. It builds a max-heap from the input data and then repeatedly extracts the maximum element, resulting in a sorted sequence.

    Top-k Queries: Max-heaps can be used to efficiently find the top-k (largest) elements from a large dataset. The max-heap can be maintained with a fixed size of k, and each new element is compared with the smallest element in the heap. If the new element is larger, it replaces the smallest element, ensuring that the heap always contains the k largest elements.
*/


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    extractMax() {
        if (this.isEmpty()) {
            return null;
        }

        const max = this.heap[0];
        const last = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.bubbleDown();
        }

        return max;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (element <= parent) {
                break;
            }

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swap = null;

            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > this.heap[swap])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}