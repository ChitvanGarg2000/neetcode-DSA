class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i=0;
        let j=0;
        const count = {};
        let maxLen = 0;

        while(i < s.length && j < s.length){
            count[s[j]] = (count[s[j]] || 0) + 1;
            while(count[s[j]] > 1){
                count[s[i]]--;
                i++;
            }
            maxLen = Math.max(maxLen, j-i+1);
            j++;
        }

        return maxLen;
    }
}
