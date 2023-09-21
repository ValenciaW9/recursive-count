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




