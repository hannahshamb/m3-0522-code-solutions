/* exported includes */

function includes(list, value) {
  let contains = false;
  const originalList = list.next;

  if (list.data === value) {
    contains = true;
  }

  while (list.next !== null) {
    if (list.next.data === value) {
      contains = true;
    }
    list.next = list.next.next;
  }
  list.next = originalList;

  return contains;
}
