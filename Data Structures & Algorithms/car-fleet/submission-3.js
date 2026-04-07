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

        for(let i=0; i<speed.length; i++){
            posMap[position[i]] = speed[i];
        }
        const sortedPositions = position.sort((a, b) => b-a);

        for(let i=0; i<speed.length; i++){
            const timeToTarget = (target-sortedPositions[i])/posMap[sortedPositions[i]];
            
            if(timeToTarget > minimum_fleet){
                fleetCount++;
                minimum_fleet = timeToTarget;
            }
        }

        return fleetCount;
    }
}
