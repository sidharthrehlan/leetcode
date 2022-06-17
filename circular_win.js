var findTheWinner = function (n, k) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  const playNext = (arr, currentIndex, k) => {
    console.log(`index: ${currentIndex} and array:`, arr);

    if (arr.length === 1) {
      return arr[0];
    }

    if (currentIndex + k < arr.length) {
      let indexOfEleToRemove = currentIndex + k - 1;
      arr.splice(indexOfEleToRemove, 1);

      return playNext(arr, indexOfEleToRemove, k);
    } else {
      let newIndex = currentIndex + k - arr.length - 1;
      arr.splice(newIndex, 1);
      return playNext(arr, newIndex, k);
    }
  };

  return playNext(arr, 0, k);
};

console.log(findTheWinner(6, 5));
