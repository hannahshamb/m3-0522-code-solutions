/* exported removeTail */

function removeTail(list) {
  const originalList = list.next;

  while (list.next !== null) {
    if (list.next.next === null) {
      originalList.next.next = list.next.next;
    }
    list.next = list.next.next;
  }
  list.next = originalList;
}
