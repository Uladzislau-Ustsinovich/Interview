function binarySearch(arr, search) {
  const index = Math.floor(arr.length / 2);

  if (arr[index] > search) {
    return binarySearch(arr.slice(0, index), search);
  }

  if (arr[index] < search) {
    return binarySearch(arr.slice(index, arr.length), search);
  }

  if (arr[index] === search) {
    return search;
  }

  return null;
}

const array = Array.from(Array(100).keys());
console.log(binarySearch(array, 5));
