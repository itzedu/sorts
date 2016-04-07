function qSort(array, start, end) {
  start = typeof start !== 'undefined' ? start : 0
  end = typeof end !== 'undefined' ? end : array.length
  var pivot = array[start];
  var last = start;

  if((end-start) < 2) {
    return;
  }

  for(var i = start+1; i < end; i++) {
    if (array[i] < pivot) {
      last++;
      var temp = array[i];
      array[i] = array[last];
      array[last] = temp;
    }
  }

  var temp1 = array[start];
  array[start] = array[last];
  array[last] = temp1;

  qSort(array, start, last);
  qSort(array, last+1, end);
}

array = [79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2];
qSort(array);
console.log(array);

bigOmega = [1,2,3,4,5,6,7,8,9];
qSort(bigOmega);
console.log(bigOmega);

bigO = [9,8,7,6,5,4,3,2,1];
qSort(bigO);
console.log(bigO);