class Solution {
public:
    bool isAnagram(string s, string t) {
       vector<int> alpha(26, 0);

       if(s.length() != t.length())
            return false;

       for(char x: s){
            alpha[x - 'a']++;
       }

       for(char x: t){
            if(alpha[x - 'a'] == 0)
                return false;
            alpha[x - 'a']--;
       }

        return true;
    }
};
