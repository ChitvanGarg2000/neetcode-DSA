class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let res = [-1, -1];
        let window_length =  Number.MAX_SAFE_INTEGER;
        let count = 0
        let left = 0
        let right = 0
        const freqWindow = {};
        const curr_window = {};
        for(const ch of t){
            freqWindow[ch] = (freqWindow[ch] || 0) + 1;
        }

        while(right < s.length){
            curr_window[s[right]] = (curr_window[s[right]] || 0) + 1;
            if(curr_window[s[right]] === freqWindow[s[right]]){
                count++;
            }
            while(count === Object.keys(freqWindow).length){
                if(right-left+1 < window_length){
                    window_length = right-left+1;
                    res = [left, right];
                }
                if(curr_window[s[left]] == freqWindow[s[left]]){
                    count--;
                }
                if(curr_window[s[left]]){
                    curr_window[s[left]] = curr_window[s[left]] - 1;
                } 
                left++;
            }
            right++;
        }
        return res[0] === -1 ? "" : s.substring(res[0], res[1] + 1);
    }
}
