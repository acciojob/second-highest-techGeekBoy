function secondHigest(arr) {
  if (arr.length <= 1) {
    return -Infinity;
  }
  let allsame = arr.every(function (value, index, array) {
    return value === array[0];
  });
  if (allsame) {
    return -Infinity;
  }
  let x = arr.sort((a, b) => a - b);
  let update = x[arr.length - 2];
  return update;
}