var arr = [5,213,55,2334,31,20];

function radixSort(array) {
  var bucket = [[],[],[],[],[],[],[],[],[],[]];

  var max = arr[0];

  for(i in array) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  console.log(max);

  var maxLength = (function() { return max.toString().length; })();

  console.log(maxLength);
  
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
    console.log(newArray);
    bucket = [[],[],[],[],[],[],[],[],[],[]];
  }
  return newArray;
}

console.log(radixSort(arr));