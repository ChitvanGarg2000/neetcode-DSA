class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> mp;

        vector<vector<string>> res;

        for(string str: strs){
            string sorted_str = str;
            sort(sorted_str.begin(), sorted_str.end());
            mp[sorted_str].push_back(str); 
        }

        for(auto& anagrams: mp){
            res.push_back(anagrams.second);
        }

        return res;
    }
};
