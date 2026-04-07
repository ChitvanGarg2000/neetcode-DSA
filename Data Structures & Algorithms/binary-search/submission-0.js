class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let s = 0;
        let e = nums.length - 1;
        while(s <= e){
            let m = s + Math.floor((e - s)/2);
            if(target === nums[m])
                return m;
            
            if(target < nums[m]) e = m - 1;
            else if(target > nums[m]) s = m + 1;
        }

        return -1 
    }
}
