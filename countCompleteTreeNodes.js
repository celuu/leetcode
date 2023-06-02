var countNodes = function (root) {
  if (root === null) return 0;
  let left = countNodes(root.left);
  let right = countNodes(root.right);
  return left + right + 1;
};
