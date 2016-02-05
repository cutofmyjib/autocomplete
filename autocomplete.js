var data = require('./data.json')

function findUser(input) {
  var re = new RegExp(input, 'i');
  var matches = [];
  for (var i = 0; i < data.length; i++) {
    if ((data[i].name.match(re)) || (data[i].username.match(re))) {
      matches.push(data[i]);
    }
  }
  return matches;
}

console.log(findUser('cat'));