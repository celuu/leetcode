var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 1 && flowerbed[0] === 0) {
    n -= 1;
  }
  for (let i = 0; i < flowerbed.length; i++) {
    if (i === 0) {
      if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        flowerbed[0] = 1;
        n -= 1;
      }
    }
    if (i === flowerbed.length - 1) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
        flowerbed[i] = 1;
        n -= 1;
      }
    }
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] !== 1 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n -= 1;
    }
  }

  return n <= 0;
};
