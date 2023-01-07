/* exported omit */
// for in loop to find var prop in source object;
// if the keys array included var prop;
// delete that prop from source object and return source object;
function omit(source, keys) {
  for (var prop in source) {
    if (keys.includes(prop)) {
      delete source[prop];
    }
  }
  return source;
}
