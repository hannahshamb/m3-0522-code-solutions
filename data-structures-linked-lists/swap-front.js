/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const head = list.data;
    list.data = list.next.data;
    list.next.data = head;
  }
  return list;
}
