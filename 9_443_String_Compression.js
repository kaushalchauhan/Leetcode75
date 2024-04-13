// Problem - 443. String Compression
const compress = function (chars) {
  if (chars.length === 1) {
    return chars.length;
  }

  let str = "";
  let left = 0;
  let right = left + 1;
  let count = 0;

  while (right !== chars.length) {
    if (chars[left] === chars[right]) {
      count++;
    }
    if (chars[left] !== chars[right]) {
      count++;
      if (count === 1) {
        str = str + chars[left];
      } else {
        str = str + chars[left] + count;
      }
      count = 0;
    }

    left++;
    right++;
  }

  if (count !== 0) {
    count++;
    str = str + chars[left] + count;
  } else {
    str = str + chars[left];
  }

  for (let i = 0; i < str.length; i++) {
    chars[i] = str[i];
  }

  console.log(str);
  return str.length;
};
