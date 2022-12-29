/* exported ransomCase */
// set variable
// make everything lowercase
// run the result through for loop (i=0; i<result.length; i++)
// use ternary operator to set condition for if remainder === 1, uppercase charAt(i) if true;
// if false, log each i (already lowercased)

function ransomCase(string) {

  var result = '';
  var newResult = '';

  result = string.toLowerCase();

  for (var i = 0; i < result.length; i++) {

    newResult += i % 2 === 1 ? result.charAt(i).toUpperCase() : result.charAt(i);
  }

  return newResult;
}
