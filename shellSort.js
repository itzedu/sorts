function shellSort(array) {
  var gap = Math.floor(array.length/2);
  while(gap > 0) {
    for(var i = array.length - 1; i >= 0; i --) {
      var element = array[i];
      var index = i;
      while(index > 0 && array[index - gap] > element) {
        array[index] = array[index - gap]
        index -= gap
      }
      array[index] = element;
    }
    gap = Math.floor(gap/2);
  }
  return array
}


console.log(shellSort([40,80,-20,75,60,57,34,90,70,45]))


