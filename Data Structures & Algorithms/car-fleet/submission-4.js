class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const posMap = {};
        let fleetCount = 0;
        let minimum_fleet = 0;

        const sortedPositions = position.map((pos, i) => ({
            position: pos,
            speed: speed[i]
        })).sort((a, b) => b.position-a.position);

        for(let elem of sortedPositions){
            const timeToTarget = (target-elem.position)/elem.speed;
            
            if(timeToTarget > minimum_fleet){
                fleetCount++;
                minimum_fleet = timeToTarget;
            }
        }

        return fleetCount;
    }
}
