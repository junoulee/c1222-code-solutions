/* exported addSuffixToAll */
// make variable newArray. newArray must have each word + suffix
// make for loop i = 0 i < string.length i ++, and have i add suffix
// then have it pushed onto an array

function addSuffixToAll(words, suffix) {

  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    newArray.push(newWord);
  }
  return newArray;
}
