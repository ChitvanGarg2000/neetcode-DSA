class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let res = [];
        
        for(let idx=temperatures.length-1; idx>=0; idx--){
            if(stack.length === 0){
                stack.push(idx);
                res[idx] = 0;
                continue;
            }
            while(stack.length > 0 && temperatures[idx] >= temperatures[stack[stack.length - 1]]){
                stack.pop();
            }
            if(stack.length > 0 && temperatures[stack[stack.length - 1]] > temperatures[idx]){
                const top = stack.length - 1;
                res[idx] = stack[top] - idx;
            }else{
                res[idx] = 0;
            }

            stack.push(idx);
        }

        return res;
    }
}
