import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        //hashmap will map strings to lists of strings 
        HashMap<String, List<String>> anagrams = new HashMap<>();
        //enhanced for loop
        for (String str : strs){
            char[] charArray = str.toCharArray();
            Arrays.sort(charArray);
            String key = new String(charArray);
            if (!anagrams.containsKey(key)){
                anagrams.put(key, new ArrayList<>());
            }
            anagrams.get(key).add(str);
        }
        return new ArrayList<>(anagrams.values())
    }
}