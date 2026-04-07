class MinStack {
    constructor() {
        this.store = [];
        this.minStore = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.store.push(val);
        if(this.minStore.length === 0 || val <= this.minStore[this.minStore.length - 1]){
            this.minStore.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.store[this.store.length - 1];
        this.store.pop();
        if(popped === this.minStore[this.minStore.length - 1]){
            this.minStore.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.store[this.store.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStore[this.minStore.length - 1]
    }
}
