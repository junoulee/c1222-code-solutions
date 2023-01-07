/* exported reverseWord */
// create empty string var newWord = ''
// run for loop that starts at word.length -1 and run backwards (var i = word.length -1; i >= 0; i--)
// make code block run word[i] and add it to newWord
// if string is 'word' - start from d + '' first loop.. 2nd loop would be d+ r

function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }
  return newWord;
}
