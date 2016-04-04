function swap(array,i,j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var length = array.length;
  var sorted = true;

  for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < array.length - i; j++) {
      if (array[j-1] > array[j]) {
        swap(array,j-1,j);
        sorted = false;
      }
    }
    if (sorted) {
      break
    }
  }
  return array
}

console.log(bubbleSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]))