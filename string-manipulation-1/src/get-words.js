/* exported getWords */
// before loop, make if statement to set ('') to newString empty array.
// else - run for loop i=0; i<string.length; i++
//  separate string into individual words using string.split(' ')
// return newString

function getWords(string) {

  if (string === ('')) {
    var newString = [];
  } else {
    for (var i = 0; i <= string.length; i++);
    newString = string.split(' ');
  }
  return newString;
}
