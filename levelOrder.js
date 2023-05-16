var levelOrder = function (root) {
  let finalArr = [];
  if (!root) return [];
  let queue = [root];
  while (queue.length > 0) {
    let queueLen = queue.length;
    let levels = [];
    for (let i = 0; i < queueLen; i++) {
      let current = queue.shift();
      levels.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    finalArr.push(levels);
  }
  return finalArr;
};
