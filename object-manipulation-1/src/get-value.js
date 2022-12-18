/* exported getValue */
// do for in loop to find key in the object (var property in object)
// if key is found in object, return value of property

function getValue(object, key) {

  for (var property in object) {
    if (key === property) {
      return object[property];
    }
  }
}
