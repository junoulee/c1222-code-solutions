/* exported reverseWords */
// split string into array and assign it to variable stringOne;
// reverse that array;
// .join to turn it back into string;
// .split it back into an array as backwards strings;
// reverse it again and join it back into a string;
function reverseWords(string) {

  var stringOne = string.split('').reverse().join('').split(' ').reverse().join(' ');

  return stringOne;
}
