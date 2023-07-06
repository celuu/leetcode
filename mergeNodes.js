var mergeNodes = function (head) {
  let current = head;
  let front = head;
  while (current !== null) {
    if (current.val === 0) {
      let sum = 0;
      current = current.next;
      while (current !== null && current.val !== 0) {
        sum += current.val;
        current = current.next;
      }
      if (sum !== 0) {
        front.next = new ListNode(sum, null);
      }
    }
    front = front.next;
  }
  return head.next;
};
