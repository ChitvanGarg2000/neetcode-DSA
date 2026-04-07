class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let s = 0;
        const M = matrix.length;
        const N = matrix[0].length
        let e = M * N - 1;

        while(s <= e){
            const m = Math.floor((s + e)/2);
            const row_idx = Math.floor(m/N);
            const col_idx = m%N;

            if(matrix[row_idx][col_idx] === target) return true;

            if(matrix[row_idx][col_idx] > target){
                e = m - 1;
            }else{
                s = m + 1;
            }
        }

        return false
    }
}
