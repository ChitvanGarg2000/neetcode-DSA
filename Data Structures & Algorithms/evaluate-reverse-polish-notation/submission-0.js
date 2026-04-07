

class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    performOperation(num1, num2, operator){
        switch(operator){
            case '+':
                return num1 + num2;
            case '*':
                return num1 * num2;
            case '-':
                return num1 - num2;
            case '/':
                return Math.trunc(num1 / num2);
        }
        return null;
    } 

    evalRPN(tokens) {
        const st = [];
        
        for (let token of tokens) {
            if (!isNaN(token)) {
                // Push numbers (convert to integer)
                st.push(parseInt(token));
            } else {
                // Operator: pop two operands
                const b = parseInt(st.pop());
                const a = parseInt(st.pop());
                
                const res = this.performOperation(a, b, token)
                st.push(res)
            }
        }
        
        return st.pop();
    }
}
