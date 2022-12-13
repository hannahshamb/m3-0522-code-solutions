/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newList = new LinkedList(list.data, value);
  newList.next.next = list.next;
  list.next = newList.next;
}
