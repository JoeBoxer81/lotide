
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
  }

};

const countLetters = function (string) {
  const results = {};
  let noSpace = string.replace(/\s/g,'');
  
  for(const letter of noSpace) {
    
    if(results.hasOwnProperty(letter)) {

      results[letter] += 1;
      
    } else {
    results[letter] = 1;
    }
  }



  
  return results;
};


//str.replace(/\s/g,'');  
console.log(countLetters("lighthouse in the house"));