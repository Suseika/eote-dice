var Results = require("./Results.js");
var Die = require("./Die.js");

var Boost = function () {
};

Boost.prototype = new Die(
    "Boost",
    [
        [Results.BLANK],
        [Results.BLANK],
        [Results.SUCCESS],
        [Results.SUCCESS, Results.ADVANTAGE],
        [Results.ADVANTAGE, Results.ADVANTAGE],
        [Results.ADVANTAGE]
    ]
);

module.exports = Boost;
