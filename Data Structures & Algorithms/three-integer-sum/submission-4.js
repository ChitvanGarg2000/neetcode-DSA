class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let j=1, k=nums.length - 1;
        const res = [];

        for(let i=0; i<nums.length - 2; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            j = i+1;
            k = nums.length - 1;

            while(j < k){
                if(nums[i] + nums[j] + nums[k] > 0){
                    k--;
                }else if((nums[i] + nums[j] + nums[k] < 0)){
                    j++;
                }else{
                    res.push([nums[i], nums[j], nums[k]]);
                    j++;
                    k--;
                    while (j < k && nums[j] === nums[j - 1]) j++;

                    while (j < k && nums[k] === nums[k + 1]) k--;
                }
            }
        }

        return res;

    }
}
