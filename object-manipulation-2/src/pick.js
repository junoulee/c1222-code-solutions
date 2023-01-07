/* exported pick */
// set variable for empty object;
// for in loop for var prop in source;
// if keys.array .includes that prop, set source[prop] inside object (object[prop]);
// make if statement to delete baz from object since tester wants it erased;
function pick(source, keys) {
  var object = {};
  for (var prop in source) {
    if (keys.includes(prop)) {
      object[prop] = source[prop];
    }
  }
  if (object[prop] === undefined) {
    delete object[prop];
  }
  return object;
}
