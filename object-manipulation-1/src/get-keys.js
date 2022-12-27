/* exported getKeys */
// set var keys as empty array
// do for in loop with var key in object- push keys into keys array
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
