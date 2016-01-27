var math = require('mathjs');

var Die = function (name, values) {
    this.values = values;
    this.name = name;
};

Die.prototype.roll = function () {
    var index = math.randomInt(0, this.numberOfSides());
    return this.values[index];
};

Die.prototype.numberOfSides = function () {
    return this.values.length;
};

module.exports = Die;
