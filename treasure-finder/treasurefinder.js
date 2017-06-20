console.log('Treasure Finder');

var treasureFinder = function(map) {
  for (var i = 0; i < map.length; i++) {
    if (map[i].indexOf("X") !== -1) {
      console.log(map[i].indexOf("X") + ", " + i);
    };
  };
};

var map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];
