class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            this.keyStore.get(key).push([value, timestamp])
        }else{
            this.keyStore.set(key, [[value, timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return ""
        }

        const value = this.keyStore.get(key);
        let low = 0;
        let high = this.keyStore.get(key).length-1;
        let curr_max = -1;
        let mid = -1;

        while(low<=high){
            mid = Math.floor((high - low)/2) + low;

            if(value[mid][1] === timestamp) return value[mid][0];
            if(value[mid][1] < timestamp){
                curr_max = value[mid][0]
                low = mid+1
            }else{
                high = mid-1;
            }
        }

        return curr_max === -1 ? "" : curr_max;
    }
}
