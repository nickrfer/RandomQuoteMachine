// jshint esversion:6

function steamrollArray(arr) {
  var returnArr = [];

  arr.forEach(val => {
    if (Array.isArray(val)) {

      var decomposed = steamrollArray(val);
      returnArr.push(...decomposed);
    } else {
      returnArr.push(val);
    }
  });
  return returnArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
