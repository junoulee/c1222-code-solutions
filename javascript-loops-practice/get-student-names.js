/* exported getStudentNames */
// make variable for newArray. then run a for loop
// have it get students.name[i] and push it on to new array

function getStudentNames(students) {
  var newArray = [];
  for (var i = 0; i < students.length; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
