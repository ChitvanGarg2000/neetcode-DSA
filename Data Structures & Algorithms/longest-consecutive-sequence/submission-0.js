class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = new Set();
        let longest = 0;
        let currentNum = 0;
        let currentStreak;

        for(let num of nums){
            uniqueNums.add(num);
        }

        for(let num of nums){
            currentNum = num;
            currentStreak = 1;
            if(!uniqueNums.has(num - 1)){
                while(uniqueNums.has(currentNum + 1)){
                    currentStreak += 1;
                    currentNum += 1;
                }
                longest = Math.max(longest, currentStreak);
            }
        }
        
        return longest;

    }
}
