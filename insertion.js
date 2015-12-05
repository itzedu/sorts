function insertionSort(array) {

  var length = array.length;

  for (var i = 1; i < length; i++) {
    var element = array[i];
    var index = i;

    for (var j = i - 1; j > -1; j--) {
      if (array[j] > element) {
        array[j+1] = array[j];
        index = j;
      } else {
        break;
      }
    }
    array[index] = element;
  }
  return array;
}

var random = [];
for (var i = 0; i < 100; i++) {
  random.push(Math.floor(Math.random()*100)+1);
}
console.log(insertionSort(random));