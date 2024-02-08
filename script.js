function secondHighest(arr) {
    if (arr.length <= 1) {
      return -Infinity;
    }
    let allSame = arr.every(function (value, index, array) {
      return value === array[0];
    });
    if (allSame) {
      return -Infinity;
    }
    let sortedArray = arr.sort((a, b) => a - b);
    let secondHighestValue = sortedArray[arr.length - 2];
    return secondHighestValue;
  }
  