


const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`:Heart Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`:Brick Assertion Failed: ${actual}  !==  ${expected}`);
  }


};
/* use object keys
2.use for of loops*/





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

//function returns key of an object if it's value matches the value of the second argument

// in object - key represents tv show genre - value represents show title
// value represents tv show title to look for
// return key (if not found return undefined)

const findKeyByValue = function (object, valueToBeMatched) {
//turn object into an array 
  let arrayOfKeys = Object.keys(object);
//loop through array
  for (let key of arrayOfKeys){
    //grab the entries from object
    //isolate value of entry 
    let value = object[key];
    //compare to function value
    if (value === valueToBeMatched) {
      //if they match return key of value
      return key;
    } 
    
  }
  return undefined//if they do not match return undefined
  

}







console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));




console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));



