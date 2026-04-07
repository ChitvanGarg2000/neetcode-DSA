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
                if(rowMap[i]?.includes(board[i][j]) || colMap[j]?.includes(board[i][j]) || gridMap[gridKey]?.includes(board[i][j])) return false;
                if(board[i][j] !== '.'){
                    rowMap[i] = rowMap[i] ? [...rowMap[i], board[i][j]] : [board[i][j]] 
                    colMap[j] = colMap[j] ? [...colMap[j], board[i][j]] : [board[i][j]]
                    gridMap[gridKey] = gridMap[gridKey] ? [...gridMap[gridKey], board[i][j]] : [board[i][j]]
                }
            }
        }

        return true;

    }
}
  