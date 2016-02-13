var _ = require("lodash");
var Die = require("./Die.js");

var D100 = function () {
};

D100.prototype = new Die(
    "d100",
    _.range(1, 101)
);

module.exports = D100;
