function mergeSort(array) {
  var middle = Math.floor(array.length/2);

  if (array.length < 2) {
    return array
  }

  var left = array.slice(0, middle);
  var right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var output = []

  //push into the output the lower first element until one of the arrays are empty
  while (left.length > 0 && right.length > 0) {
    if(left[0] > right[0]) {
      output.push(right.shift());
    } else {
      output.push(left.shift());
    }
  }

  // concat left array
  if(left.length > 0) {
    output = output.concat(left)
  }

  // concat the right array
  if(right.length > 0) {
    output = output.concat(right)
  }


  return output;
}

var arr = [79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]
console.log(mergeSort(arr))