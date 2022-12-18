/* exported toObject */
// set key as index 0 of array
// set value as index 1 of array
// set empty object as object
// input key and value into object
function toObject(keyValuePair) {

  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var object = {};
  object[key] = value;
  return object;
}
