function shellSort(array) {
  var gap = Math.floor(array.length/2);
  while(gap > 0) {
    // console.log("The current gap is: ", gap + "\n")
    for(var i = array.length - 1; i >= 0; i --) {
    // for(var i = 0; i < array.length)
      var element = array[i];
      var index = i;
      // var last = i;
      while(index > 0 && array[index - gap] > element) {
        array[index] = array[index - gap]
        index -= gap
        // console.log("Index: ", index)
      }
      array[index] = element;
      // console.log("Array: ", array)
    }
    gap = Math.floor(gap/2);
  }
  return array
}

console.log(shellSort([23, 42, 121, 10, 5, 100, 13, 50]))

//gap is 2
// the current array is [4,3,2,1,0,9,8,7,6,5]
// element = array[9] = 5
// index = 9







