/* exported getWords */
//  make if statement to set ('') to newString empty array.
// else
//  separate string into individual words using string.split(' ')
// return newString

function getWords(string) {

  if (string === ('')) {
    var newString = [];
  } else {

    newString = string.split(' ');
  }
  return newString;
}
