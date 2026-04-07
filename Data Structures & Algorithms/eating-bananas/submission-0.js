class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let s = 1;
        let e = Math.max(...piles);
        let k = -1;

        while(s <= e){
            const m = Math.floor((s + e)/2);
            let hours = 0;
            for(let pile of piles){
                hours += Math.ceil(pile/m);
                if(hours > h){
                    break;
                }
            }

            if(hours <= h){
                k = m;
                e = m - 1;
            }else{
                s = m+1;
            }
        }

        return k;
    }
}
