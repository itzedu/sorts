function quickSort(list) {
  var left = [];
  var right = [];
  
  if (list.length < 2) {
    return list;
  }

  // pivot is always the first element of the list
  for (var i = 1; i < list.length; i++) {
    if (list[i] < list[0]) {      
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }

  return quickSort(left).concat(list[0]).concat(quickSort(right));
}

console.log(quickSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(quickSort([1,2,3,4,5,6,7,8,9]));
console.log(quickSort([9,8,7,6,5,4,3,2,1]));