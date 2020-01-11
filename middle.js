const eqArrays = function (arr1, arr2) {

  let flag = false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      flag = true;
    }
  }
  if (flag) {
    return false;
  } else {
    return true;
  }

}

const assertArraysEqual = function (array1, array2) {
  if ((eqArrays(array1, array2)) === true) {
    console.log("Assertion Passed")
  } else {
    console.log("Assertion Failed")
  }

}

// find the middle element(s) of the array
const middle = function(arr) {

  //length < 3
  if (arr.length <3) {
    let emptArr = [];
    return emptArr;
  }
  
  //length odd
  else if (arr.length % 2 == 1){
    let result = [];
    let i = Math.floor(arr.length / 2);
    result.push(arr[i]);
    return result;
  }
  
  //length even
  else { // if (arr.length % 2 == 0) {
    let result1 = [];
    let i1 = arr.length / 2;
    result1.push(arr[i1 -1]);
    result1.push(arr[i1]);
    return result1;
  }
  
  
  }


// middle([1])
// middle([1, 2])
console.log(middle([1, 2, 3]);
// middle([1, 2, 3, 4])
// middle([1, 2, 3, 4, 5])
// middle([1, 2, 3, 4, 5, 6])

