/* exported isPalindromic */
// create two varialbes, stringOne and stringTwo, these will be for one array of string and another array of string reversed;
// loop through array to remove spaces from both arrays by splicing them at index i;
// run another for loop to compare each letter of both arrays to each other;

function isPalindromic(string) {

  var stringOne = string.split('');
  stringOne = stringOne.reverse();
  var stringTwo = string.split('');
  for (var i = 0; i < stringOne.length; i++) {
    if (stringOne[i] === ' ') {
      stringOne.splice(i, 1);
    }
    if (stringTwo[i] === ' ') {
      stringTwo.splice(i, 1);
    }

  }
  for (i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      return false;
    }
  }
  return true;
}
