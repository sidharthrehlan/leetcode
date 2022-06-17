function isEqual(s, l, r, diff) {
  if (l >= r) return true;
  if (diff > 1) return false;
  if (s[l] === s[r]) {
    l++;
    r--;
    return isEqual(s, l, r, diff);
  } else if (s[l] !== s[r]) {
    if (diff > 0) return false;

    let diffl = diff + 1;
    let diffr = diff + 1;

    return isEqual(s, l + 1, r, diffl) || isEqual(s, l, r - 1, diffr);
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.length <= 1) return true;
  let l = 0;
  let r = s.length - 1;
  let diff = 0;

  return isEqual(s, l, r, diff);
};

console.log(validPalindrome('ebcbbececabbacecbbcbe'));
