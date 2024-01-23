/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Please implement encode and decode methods

@param {string[]} strs
@return {string}
*/
//adding a delimiter
var encode= function(strs){
    if (!strs.length) return null;
    return strs.join("-encodeStr-")
}
//decode a single string to a list of strings

var decode = function function(s){
    if (s=== null) return [];
    return s.split('-encodeStr')
}