/* exported getValues */
// set empty array for var values
// for in loop with var key in object
// push object[key] into values array
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
