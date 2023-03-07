/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return undefined;
  }
  list.next.data = value;
}
