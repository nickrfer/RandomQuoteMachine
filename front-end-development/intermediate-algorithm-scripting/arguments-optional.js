// jshint esversion:6

function addTogether() {
  var arg1 = arguments[0];

  if (!validateArguments(arguments)) {
    return undefined;
  }

  if (arguments.length == 1) {
    return function(val) {
      if (!validateArguments(val)) {
        return undefined;
      } else {
        return sum(arg1, val);
      }
    };
  } else {
    return sum(arg1, arguments[1]);
  }
}

function sum(val1, val2) {
  return val1 + val2;
}

function validateArguments(arr) {
  var valid = true;

  if (Array.isArray(arr)) {
    valid = false;
  }

  [].forEach.call(arr, function (arg) {
    if (typeof arg != 'number') {
      valid = false;
    }
  });
  return valid;
}

addTogether(2,3);
