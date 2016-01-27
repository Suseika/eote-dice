var Results = require("./../results/Results.js");
var Die = require("./Die.js");

var Difficulty = function () {
};

Difficulty.prototype = new Die(
    "Difficulty",
    [
        [Results.BLANK],
        [Results.FAILURE],
        [Results.FAILURE, Results.FAILURE],
        [Results.THREAT],
        [Results.THREAT],
        [Results.THREAT],
        [Results.THREAT, Results.THREAT],
        [Results.FAILURE, Results.THREAT]
    ]
);

module.exports = Difficulty;
