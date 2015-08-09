function swap(array,i,j) {
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
}


function selectionSort(array) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var min = array[i], index = i; // if min found in the unsorted portion of the array, save the index to be swapped
    for (var j = i + 1; j < length; j++) {
      if (min > array[j]) {
        index = j;
        min = array[j];
      }
    }
    swap(array,i,index)
  }
  return array;
}