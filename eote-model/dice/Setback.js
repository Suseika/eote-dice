var Results = require("./../results/Results.js");
var Die = require("./Die.js");

var Setback = function () {
};

Setback.prototype = new Die(
    "setback",
    [
        [Results.BLANK],
        [Results.BLANK],
        [Results.FAILURE],
        [Results.FAILURE],
        [Results.THREAT],
        [Results.THREAT]
    ]
);

module.exports = Setback;
