/* exported numVowels */
// set empty array as result
// loop through string to filter out vowels and push the vowels into the result array
// return the number of vowels through result.length;

function numVowels(string) {

  var result = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'A' || string[i] === 'a' || string[i] === 'E' || string[i] === 'e' || string[i] === 'I' || string[i] === 'i' || string[i] === 'O' || string[i] === 'o' || string[i] === 'U' || string[i] === 'u') {
      result.push(string[i]);
    }

  }
  return result.length;
}
