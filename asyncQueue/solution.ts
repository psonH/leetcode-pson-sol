// Implement an async request queue that ensures that only three requests are processed at a time. 
// The queue should have a method to add requests and a method to process the next request in the queue.

type AsyncRequest = () => Promise<void>;

class AsyncRequestQueue {
    private queue: AsyncRequest[] = [];
    private activeCount: number = 0;
    private maxConcurrent: number = 3;

    addRequest(request: AsyncRequest): void {
        this.queue.push(request);
        this.processNext();
    }

    private async processNext(): Promise<void> {
        if (this.activeCount >= this.maxConcurrent || this.queue.length === 0) {
            return;
        }

        const request = this.queue.shift()!;
        this.activeCount++;

        try {
            await request();
        } finally {
            this.activeCount--;
            this.processNext();
        }
    }
}

// Example usage:
const requestQueue = new AsyncRequestQueue();

const createRequest = (id: number, delay: number): AsyncRequest => {
    return () => new Promise<void>((resolve) => {
        console.log(`Processing request ${id}`);
        setTimeout(() => {
            console.log(`Completed request ${id}`);
            resolve();
        }, delay);
    });
};

requestQueue.addRequest(createRequest(1, 2000));
requestQueue.addRequest(createRequest(2, 1000));
requestQueue.addRequest(createRequest(3, 1500));
requestQueue.addRequest(createRequest(4, 500));
requestQueue.addRequest(createRequest(5, 3000));

