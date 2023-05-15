var inorderTraversal = function (root) {
  if (!root) return [];
  let left = inorderTraversal(root.left);
  let right = inorderTraversal(root.right);
  return [...left, root.val, ...right];
};
