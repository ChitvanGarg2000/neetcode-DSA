class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let lMax = 0;
        let rMax = 0;
        let res = 0;
        let i = 0;
        let j = height.length -1;

        while(i<j){
            if(height[i] < height[j]){
                lMax = Math.max(lMax, height[i]);
                res += (lMax - height[i]);
                i += 1;
            }else{
                rMax = Math.max(rMax, height[j]);
                res += (rMax - height[j]);
                j -= 1;
            }
        }

        return res;
    }
}
