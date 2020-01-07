/*const sum = function (a, b) {
  return a + b;
}

console.assert(sum(1, 2) === 3);
console.assert(sum(1, 20) === 3);*/

/*const sumBuggy = function(a, b) {
  return a * b;
}

console.assert(sumBuggy(1, 2) === 3);*/

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
  }



};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

//if (actual === expected) {
// console.log(assertEqual());