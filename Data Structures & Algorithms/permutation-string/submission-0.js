class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let count = 0;
        let i = 0;
        let j = 0;
        let k = 0;
        const mapS1 = {};
        let mapS2 = {};

        for(const char of s1){
            mapS1[char] = (mapS1[char] || 0) + 1;
        }

        while(i<s2.length){
            j = i;
            k = i+s1.length;
            count = 0;
            while(k <= s2.length && j<k){
                mapS2[s2[j]] = (mapS2[s2[j]] || 0) + 1;
                if(mapS2[s2[j]] === mapS1[s2[j]]){
                    count++;
                }
                if(count === Object.keys(mapS1).length){
                    return true;
                }
                j++;
            }
            mapS2 = {};
            i++;
        }
        return false;
    }
}
