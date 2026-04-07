class Stack {
    constructor(){
        this.store = []
    }

    push(val){
        this.store.push(val);
    }

    pop(){
        if(this.store.length > 0){
            this.store.pop()
        }
    }

    isEmpty(){
        return this.store.length === 0;
    }

    peek(){
        return this.store[this.store.length - 1];
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const symbolStack = new Stack();
        let i =0;

        while(i < s.length){
            if(symbolStack.isEmpty()){
                symbolStack.push(s[i]);
                i++;
                continue;
            }

            const stackTop = symbolStack.peek();
            const isValidPair = (s[i] === ')' && stackTop === '(') || (s[i] === '}' && stackTop === '{') || (s[i] === ']' && stackTop === '[')
            
            if(isValidPair){
                symbolStack.pop();
            }else{
                symbolStack.push(s[i]);
            }

            i++;
        }

        return symbolStack.isEmpty();
    }
}
