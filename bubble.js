function swap(array,i,j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}

function bubbleSort(array) {
  var length = array.length;

  for (var i = 0; i < array.length; i++) {
    var sorted = true;
    for (var j = 0; j < array.length - 1; j++) {
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