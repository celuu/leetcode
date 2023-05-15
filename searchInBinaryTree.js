var searchBST = function (root, val) {
  if (root === null) return null;
  if (val < root.val) {
    return searchBST(root.left, val);
  } else if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return root;
  }
};
