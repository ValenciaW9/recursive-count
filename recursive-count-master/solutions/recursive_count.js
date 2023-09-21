function recursiveCount(num = 0) {
  if (num >= 10) {
    return;
  }

  console.log(num);
  recursiveCount(num + 1);

  // THIS IS ALSO A VALID OPTION INSTEAD OF THE ABOVE
  // recursiveCount(++num);

  // THIS WILL CAUSE A STACK OVERFLOW. WHY?
  // recursiveCount(num++);

  // IF YOU LOG NUM BELOW, THE NUMBERS PRINT BACKWARDS FROM 9 TO 0. WHY?
  // console.log(num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
function recursiveCount(num = 0) {
  // type your code here
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution

//const recursiveCount = require('../recursive_count');

//test('logs numbers 0 to 9', () => {
 // console.log = jest.fn();
  //recursiveCount();

  //for (let i = 0; i < 10; ++i) {
  //  expect(console.log).toHaveBeenCalledWith(i);
 // }
//});

//test('returns undefined', () => {
 // expect(recursiveCount()).toBe(undefined);
//});


function recursive_count( i = 0) {
  if ( i < 10) {
    console.lof(i);
    recursiveCount( i = 1);
  }
}

recursiveCount();





const recursiveCount = require('../recursive_count');

test('logs numbers 0 to 9', () => {
  console.log = jest.fn();
  recursiveCount();

  for (let i = 0; i < 10; ++i) {
    expect(console.log).toHaveBeenCalledWith(i);
  }
});

test('returns undefined', () => {
  expect(recursiveCount()).toBe(undefined);
});


//pseudocode implementation of the recursiveCount function:

//function recursiveCount(num = 0) {
  // type your code here
/}
///the recursiveCount function is defined with an optional parameter num that defaults to 0.

//testcases 
//onst recursiveCount = require('../recursive_count');

test('logs numbers 0 to 9', () => {
  console.log = jest.fn();
  recursiveCount();

  for (let i = 0; i < 10; ++i) {
    expect(console.log).toHaveBeenCalledWith(i);
  }
});

test('returns undefined', () => {
  expect(recursiveCount()).toBe(undefined);
//These tests are written using the Jest testing framework for JavaScript. The first test checks if calling recursiveCount logs the numbers 0 to 9 using console.log. It uses jest.fn() to mock the console.log function and then asserts that it was called with each number from 0 to 9.

//The second test checks if calling recursiveCount returns undefined.






