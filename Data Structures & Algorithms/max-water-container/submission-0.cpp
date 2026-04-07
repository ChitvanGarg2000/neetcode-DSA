class Solution {
public:
    int maxArea(vector<int>& heights) {
        int maxAreaPortion = 0;

        int i = 0;
        int j = heights.size() -1;

        while(i<j){
            maxAreaPortion = max(maxAreaPortion, (j-i)*(min(heights[i], heights[j])));

            if(heights[i] < heights[j]){
                i++;
            }else if(heights[i] > heights[j]){
                j--;
            }else{
                i++;
                j--;
            }
        }

        return maxAreaPortion;
    }
};
