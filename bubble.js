function swap(array,i,j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  var length = array.length;
  var sorted = true;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j+1]) {
        swap(array,j,j+1);
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