class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freq = {};
        let i=0, maxCount = 0, maxLen = 0;

        for(let j=0; j<s.length; j++){
            const char = s[j];
            freq[char] = (freq[char] || 0) + 1
            maxCount = Math.max(maxCount, freq[char])

            while((j - i - maxCount + 1) > k){
                freq[s[i]]--;
                i++;
            }

            maxLen = Math.max(j-i+1, maxLen)

        }
    
        return maxLen;
    }
}
