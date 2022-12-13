/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {

  const newList = new LinkedList(list.data);
  newList.next = list.next;

  while (list.next !== null) {
    if (list.next.next === null) {
      list.next.next = new LinkedList(value);
      break;
    }
    list.next = list.next.next;
  }

  list.next = newList.next;

}
