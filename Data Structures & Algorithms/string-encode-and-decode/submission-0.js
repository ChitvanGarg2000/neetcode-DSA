class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(let str of strs){
            encoded += `${str.length}@${str}`;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let j = 0;
        const res = [];

        while(i < str.length ){
            j = i;

            while(str[j] !== '@'){
                j++;
            }
            const strLen = parseInt(str.substring(i, j));
            j = j+1;
            res.push(str.substring(j, j+strLen));
            i = j + strLen;
        }
        return res;
    }
}
