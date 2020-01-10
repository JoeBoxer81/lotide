
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


assertArraysEqual([1, 2], [3, 4]);
assertArraysEqual([1, 2], [1, 2]);