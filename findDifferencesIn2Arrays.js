var findDifference = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();
  let finalArr = [];
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    set2.add(nums2[i]);
  }
  for (num of nums1) {
    if (!set2.has(num) && !arr2.includes(num)) {
      arr2.push(num);
    }
  }
  finalArr.push(arr2);

  for (num of nums2) {
    if (!set1.has(num) && !arr.includes(num)) {
      arr.push(num);
    }
  }
  finalArr.push(arr);
  return finalArr;
};
