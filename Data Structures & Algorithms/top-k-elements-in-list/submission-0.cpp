class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        unordered_map<int, int> freq;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        for(int num: nums){
            if(freq.find(num) == freq.end()){
                freq[num] = 1;
            }else{
                freq[num]++;
            }
        }

        for(auto elem: freq){
            pq.push({elem.second, elem.first});

            if(pq.size() > k){
                pq.pop();
            }
        }

        vector<int> res;

        for(int i=0; i<k; i++){
            res.push_back(pq.top().second);
            pq.pop();
        }

        return res;

    }
};
