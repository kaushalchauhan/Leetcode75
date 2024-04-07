// Problem - 1071. Greatest Common Divisor of Strings
const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const isCommonDivisor = (s, str) => {
    for (let i = 0; i < str.length; i += s.length) {
      if (str.substring(i, i + s.length) !== s) {
        return false;
      }
    }
    return true;
  };

  const len = Math.min(str1.length, str2.length);
  for (let i = len; i > 0; i--) {
    const s = str1.substring(0, i);
    if (isCommonDivisor(s, str1) && isCommonDivisor(s, str2)) {
      return s;
    }
  }

  return "";
};
