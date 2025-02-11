const repeatString = require('./repeatString-solution');

describe('repeatString', () => {
  test('repeats the string', () => {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });
  test('repeats the string many times', () => {
    expect(repeatString('hello', 10)).toEqual('hellohellohellohellohellohellohellohellohellohello');
  });
  test('repeats the string 1 times', () => {
    expect(repeatString('hi', 1)).toEqual('hi');
  });
  test('repeats the string 0 times', () => {
    expect(repeatString('bye', 0)).toEqual('');
  });
  test('does not use the built-in String repeat method', () => {
    /* Even though there is a built-in String repeat method,
      in this exercise specifically, we want you to practise using loops */
    jest.spyOn(String.prototype, 'repeat').mockName('Built-in String repeat method');
    repeatString("don't use the built-in repeat method!", 1);
    expect(String.prototype.repeat).not.toHaveBeenCalled();
  });
  test('returns ERROR with negative numbers', () => {
    expect(repeatString('goodbye', -1)).toEqual('ERROR');
  });
  test('repeats the string a random amount of times', function () {
    /*The number is generated by using Math.random to get a value from between
    0 to 1, when this is multiplied by 1000 and rounded down with Math.floor it 
    equals a number between 0 to 999 (this number will change everytime you run
    the test).*/

    // DO NOT use Math.floor(Math.random() * 1000) in your code,
    // this test generates a random number, then passes it into your code with a function parameter.
    // If this doesn't make sense, you should go read about functions here: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-3
    const number = Math.floor(Math.random() * 1000);
    /*The .match(/((hey))/g).length is a regex that will count the number of heys
    in the result, which if your function works correctly will equal the number that
    was randomly generated. */
    expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(
      number
    );
  });
  test('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
