/* exported defaults */
// for in loop to find key in source;
// use in operator to tell it that if key is not in the target object, copy that key from source over to target;
function defaults(target, source) {

  for (var key in source) {
    if (key in target !== true) {

      target[key] = source[key];
    }
  }
  // console.log(target);
}
