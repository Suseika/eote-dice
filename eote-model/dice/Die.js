var math = require('mathjs');

var Die = function (name, sides) {
    this.sides = sides;
    this.name = name;
};

Die.prototype.roll = function () {
    var index = math.randomInt(0, this.numberOfSides());
    return this.sides[index];
};

Die.prototype.numberOfSides = function () {
    return this.sides.length;
};

module.exports = Die;
