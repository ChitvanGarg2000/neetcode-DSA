class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length-1;

        while(i<j){
            if(target > numbers[i] + numbers[j]){
                i++;
            }else if(target < numbers[i] + numbers[j]){
                j--;
            }else{
                return [i+1, j+1];
            }
        }
        return null;
    }
}
