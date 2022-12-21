/* exported getTail */

function getTail(list) {
  let tail;
  const originalList = list.next;

  if (list.next === null) {
    tail = list.data;
  }

  while (list.next !== null) {
    if (list.next.next === null) {
      tail = list.next.data;
    }
    list.next = list.next.next;
  }
  list.next = originalList;

  return tail;

}
