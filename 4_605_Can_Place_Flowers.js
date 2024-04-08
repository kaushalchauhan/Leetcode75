// Problem - 605. Can Place Flowers
const canPlaceFlowers = function (flowerbed, n) {
  const flowerbedLength = flowerbed.length;

  for (let i = 0; i < flowerbedLength; ++i) {
    const left = i === 0 ? 0 : flowerbed[i - 1];
    const right = i === flowerbedLength - 1 ? 0 : flowerbed[i + 1];

    if (left + flowerbed[i] + right === 0) {
      flowerbed[i] = 1;
      --n;
    }
  }
  return n <= 0;
};
