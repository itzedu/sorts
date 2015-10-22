//in place quicksort

function qSort(array, start, end) {
  var start = typeof start !== 'undefined' ? start : 0
  var end = typeof end !== 'undefined' ? end : array.length
  var pivot = array[start];
  var ll = start;

  for(var i = start+1; i < end; i++) {
    if (array[i] < pivot) {
      ll++;
      var temp = array[i];
      array[i] = array[ll];
      array[ll] = temp;
    }
  }

  var temp1 = array[start];
  array[start] = array[ll];
  array[ll] = temp1;

  if((end-start) < 2) {
    return;
  }

  qSort(array, start, ll);
  qSort(array, ll+1, end);
}


var arr = [];
for (var i = 0; i< 100; i++) {
    arr.push(Math.round(Math.random() * i))
}
var length = arr.length;

qSort(arr);

console.log(arr);