class QueueResouce {
    #queue = [];

    constructor() {}

    add(resource) {
        this.#queue[this.#queue.length] = resource;
    }

    getNext() {
        if(this.#queue.length) {
            const resource = this.#queue[0];
            this.#queue.splice(0, 1);

            return resource;
        }
        
        return null;
    }

    clear() {
        if(this.#queue.length) {
            this.#queue.length = 0;
        }
    }
}

module.exports = { QueueResouce };
