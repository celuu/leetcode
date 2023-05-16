var postorderTraversal = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

const helper = (root, res) => {
  if (!root) return;
  helper(root.left, res);
  helper(root.right, res);
  res.push(root.val);
};
