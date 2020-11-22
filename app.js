var
  size = 6,
  space = '';

var items = ['♥ '];

for (var s = 0; s < size - 1; s++) {
  space += ' ';
}

for (var i = 0; i < size; i++) {
  if (i == 0)
  console.log(space + '♥ ');
  else {
    var tree = '';
    for (var j = 0; j < i + 1; j++) {
      tree += items[getRandomInt(0, items.length)];
    }
    console.log(space + tree);
  }

  space = space.substring(0, space.length - 1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}