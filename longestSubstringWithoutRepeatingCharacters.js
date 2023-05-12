var lengthOfLongestSubstring = function(s) {
    let j = 0;
    let i = 0; 
    let maxLength = 0;
    let hash = {};

    while(i < s.length) { 
        hash[s[i]] = (hash[s[i]] || 0) + 1;
        while(hash[s[i]] > 1) { 
            hash[s[j]] -= 1
            j += 1
        } 
        maxLength = Math.max(maxLength, i - j + 1)
        i++
    }

    return maxLength;

};