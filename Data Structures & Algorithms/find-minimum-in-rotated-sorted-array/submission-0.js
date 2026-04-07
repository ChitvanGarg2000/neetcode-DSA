class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length - 1;
        let m = -1;

        while(l<r){
            if(nums[l] < nums[r]){
                return nums[l];
            }
            m = Math.floor((l + r)/2);
            if(nums[r] < nums[m]){
                l = m+1;
            }else{
                r = m;
            }
        }

        return nums[l];
    }
}
