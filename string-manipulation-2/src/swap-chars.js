/* exported swapChars */
// make empty array newString
// split each character of string by string.split('');
// set orders of firstIndex and secondIndex equal to the reverse order of it
// turn newString into a string through newString.toString();
// for loop to extract everything except the commas by incrementing by 2;
// add finalResult to result[i] inside the loop, return finalResult
function swapChars(firstIndex, secondIndex, string) {
  var newString = [];
  newString = string.split('');
  [newString[firstIndex], newString[secondIndex]] = [newString[secondIndex], newString[firstIndex]];
  var result = newString.toString();
  var finalResult = '';
  for (var i = 0; i < result.length; i += 2) {

    finalResult += result[i];
  }
  return finalResult;
}
