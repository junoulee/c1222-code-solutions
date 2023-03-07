/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  while (list.next) list = list.next;
  list.next = new LinkedList(value);
}
