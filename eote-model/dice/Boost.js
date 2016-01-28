var Results = require("./../results/Results.js");
var Die = require("./Die.js");

var Boost = function () {
};

Boost.prototype = new Die(
    "boost",
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
