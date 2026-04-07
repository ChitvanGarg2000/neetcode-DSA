class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max_profit = 0;
        let min_price = Number.MAX_VALUE;

        for(let price of prices){
            min_price = Math.min(min_price, price);
            max_profit = Math.max(max_profit, price - min_price);
        }

        return max_profit;
    }
}
