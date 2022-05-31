var getRepeater = (s, index) => {
  let repeater = '';
  while (!isNaN(s[index])) {
    repeater = s[index] + repeater;

    index = index - 1;
  }
  return parseInt(repeater) || 0;
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let openBracketPosition = -1;
  let closeBracketPosition = -1;
  let repeater = 0;
  let repeatedStr = '';
  let newSub = '';

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === '[') {
      openBracketPosition = i;

      repeater = getRepeater(s, i - 1);
    }
    if (s[i] === ']') {
      closeBracketPosition = i;
    }

    if (openBracketPosition !== -1 && closeBracketPosition !== -1) {
      repeatedStr = s.substring(openBracketPosition + 1, closeBracketPosition);
      newSub = s.substring(0, openBracketPosition - repeater.toString().length);
      for (let j = 0; j < repeater; j++) {
        newSub = newSub + repeatedStr;
      }
      newSub = newSub + s.substring(closeBracketPosition + 1);
      break;
    }
  }

  if (openBracketPosition === -1 && closeBracketPosition === -1) {
    return s;
  } else {
    return decodeString(newSub);
  }
};

let output = decodeString('"3[a]2[bc]"');
console.log(output);
