var preorderTraversal = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

const helper = (root, res) => {
  if (!root) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
};
