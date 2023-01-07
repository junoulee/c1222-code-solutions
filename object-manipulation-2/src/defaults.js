/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
  if (target[key] === source[key]) {
    key = target[source[key]];
  }
  // console.log(target);
}
