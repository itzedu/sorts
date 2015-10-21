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

//test array
var a = [];
for (var i = 0; i < 10; ++i) {
   a[i] = Math.floor((Math.random()*100)+1);
}

console.log(a)
console.log(quickSort(a))