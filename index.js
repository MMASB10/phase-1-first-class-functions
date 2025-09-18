// 1. Takes a callback as an argument and calls it.

function receivesAFunction(callback) {
  return callback();
}

// 2. Returns a named function.

function returnsANamedFunction() {
  function namedFunction() {
    return "I’m a named function!";
  }
  return namedFunction;
}

// 3. Returns an anonymous function.

function returnsAnAnonymousFunction() {
  return function() {
    return "I’m an anonymous function!";
  };
}

// Export them for the tests

module.exports = {
  receivesAFunction,
  returnsANamedFunction,
  returnsAnAnonymousFunction
};
