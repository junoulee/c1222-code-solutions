/* exported pick */
// set variable for empty object;
// for in loop for var prop in source;
// if keys.array .includes that prop and isn't undefined, set source[prop] inside object (object[prop]);

function pick(source, keys) {
  var object = {};
  for (var prop in source) {
    if (keys.includes(prop) && source[prop] !== undefined) {
      object[prop] = source[prop];
    }
  }

  return object;
}
