class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let curr_max = [];
        const res = [];
        for(let i=0; i<nums.length; i++){
            if(i>=k && curr_max[0] <= i-k){
                curr_max.shift();
            }

            while(curr_max.length > 0 && nums[curr_max[curr_max.length - 1]] < nums[i]){
                curr_max.pop()
            }

            curr_max.push(i);

            if(i >= k-1){
                res.push(nums[curr_max[0]]);
            }
        }
        return res;
        
    }
}
