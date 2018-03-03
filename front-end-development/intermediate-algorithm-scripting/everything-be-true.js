// jshint esversion:6

function truthCheck(collection, pre) {
  var isTruth = true;

  collection.forEach(json => {
    if (isJsonFalse(json, pre)) {
      isTruth = false;
    }
  });
  return isTruth;
}

function isJsonFalse(json, pre) {
  return json[pre] == null ||
    (typeof json[pre] != 'string' && isNaN(json[pre])) ||
    (typeof json[pre] == 'number' && json[pre] <= 0) ||
    (typeof json[pre] == 'string' && json[pre] == "");
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
