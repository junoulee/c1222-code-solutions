/* exported isVowel */
// run for loop i = 0; i < char.length;
// if char is === capital vowel or lowercase vowel - return true
// else return false

function isVowel(char) {

  if (char === 'A' || char === 'a' || char === 'E' || char === 'e' || char === 'I' || char === 'i' || char === 'O' || char === 'o' || char === 'U' || char === 'u') {
    return true;
  } else {
    return false;
  }
}
