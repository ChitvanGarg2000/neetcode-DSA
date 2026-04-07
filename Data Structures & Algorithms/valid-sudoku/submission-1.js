class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap = {};
        const colMap = {};
        const gridMap = {};
        const n = board.length;

        for(let i=0; i< board.length; i++){
            for(let j=0; j<board[0].length; j++){
                const gridKey = `${Math.floor(i/3)},${Math.floor(j/3)}`
                if(rowMap[i]?.has(board[i][j]) || colMap[j]?.has(board[i][j]) || gridMap[gridKey]?.has(board[i][j])) return false;
                if(!rowMap[i]) rowMap[i] = new Set();
                if(!colMap[j]) colMap[j] = new Set();
                if(!gridMap[gridKey]) gridMap[gridKey] = new Set();
                if(board[i][j] !== '.'){
                    rowMap[i].add(board[i][j])
                    colMap[j].add(board[i][j])
                    gridMap[gridKey].add(board[i][j])
                }
            }
        }

        return true;

    }
}
  