function radixSort(array) {
  var bucket = [[],[],[],[],[],[],[],[],[],[]];

  var max = arr[0];

  for(i in array) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  var maxLength = max.toString().length;

  for (var i = 0; i < maxLength; i++) {
    for (var j = 0; j < array.length; j++) {
      bucket[Math.floor(arr[j] / Math.pow(10, i)) % 10].push(arr[j]);
    }    

    newArray = [];
    
    for(var k = 0; k < bucket.length; k++) {
      for(var z = 0; z < bucket[k].length; z++){
        newArray.push(bucket[k][z]);
      }
    }
    bucket = [[],[],[],[],[],[],[],[],[],[]];
  }
  return newArray;
}
var arr = [79, 74, 25, 14, 85, 35, 81, 69, 7, 83]
console.log(radixSort(arr));