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

// returns  array without contents of second array

const without = function (sourceArr, removeArr) {
  let result = [];

  //compare contents of second array to the contents of first array
  for (let i = 0; i < sourceArr.length;i++) {
    let item = sourceArr[i];
    //find if item is IN removeArr
    // then DO NOT push item into result
    if (removeArr.indexOf(item) === -1) {
      result.push(item);
    }
  }




// if contents of the second array match the contents of first array then remove said content

//return new array with content removed

return result;

}

assertArraysEqual(without([1, 2, 3], [1])) // [2,3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]))