var reverse = (str) => {
  let length = str1.length;

  reverseStr(str1, 0, length - 1);
};

function reverseStr(str, l, r) {
  if (l > r || l === r) {
    return;
  }

  let temp = str[l];
  str[l] = str[r];
  str[r] = temp;

  reverseStr(str, l + 1, r - 1);
}
