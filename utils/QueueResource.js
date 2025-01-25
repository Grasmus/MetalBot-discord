class QueueResouce {
    #queue = [];

    constructor() {}

    addToEnd(resource) {
        this.#queue.push(resource);
    }

    addArrayToEnd(resourceArray) {
        for (let index = 0; index < resourceArray.length; index++) {
            this.#queue.push(resourceArray[index])
        }
    }

    addToStart(resource) {
        this.#queue.unshift(resource)
    }

    addArrayToStart(resourceArray) {
        for (let index = resourceArray.length - 1; index >= 0; index--) {
            this.#queue.unshift(resourceArray[index])
        }
    }

    getNext() {
        if(this.#queue.length) {
            return this.#queue.shift();
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
