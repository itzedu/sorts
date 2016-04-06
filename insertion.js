function insertionSort(arr) {
  var length = arr.length;
  var element = arr[i]; // element to be inserted
  var index = i; // represents where the element is going to be inserted at

  for (var i = 1; i < length; i++) { // outer loop represents the unsorted portion of the array
    element = arr[i]; // element to be inserted
    index = i; // represents where the element is going to be inserted at

    for (var j = i - 1; j > -1; j--) { // innner loop represents the sorted portion of the array
      if (arr[j] > element) {
        arr[j+1] = arr[j];
        index = j;
      } else {
        break;
      }
    }
    arr[index] = element;
  }
  return arr;
}

console.log(insertionSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(insertionSort([1,2,3,4,5,6,7,8,9]));
console.log(insertionSort([9,8,7,6,5,4,3,2,1]));