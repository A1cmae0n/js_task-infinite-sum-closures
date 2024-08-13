'use strict';
let total = 0;
/***
 * @return {function}
 */
function makeInfinityAdder() {
  // Return a function that adds its argument to the total
  return function (arg) {
    if (typeof arg === 'undefined') {
      // If called without arguments, return the current total
      // const temp = obj.total;
      const temp = total;
      total = 0;
      return temp;
    }
    // If called with a number, add it to the total
    total += arg;
    // Return a new function to allow for chaining
    return makeInfinityAdder(total);
  };
}

module.exports = makeInfinityAdder;
