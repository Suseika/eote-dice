var Results = require("./Results.js");
var Die = require("./Die.js");

var Proficiency = function () {
};

Proficiency.prototype = new Die(
    "Proficiency",
    [
        [Results.BLANK],
        [Results.SUCCESS],
        [Results.SUCCESS],
        [Results.SUCCESS, Results.SUCCESS],
        [Results.SUCCESS, Results.SUCCESS],
        [Results.ADVANTAGE],
        [Results.SUCCESS, Results.ADVANTAGE],
        [Results.SUCCESS, Results.ADVANTAGE],
        [Results.SUCCESS, Results.ADVANTAGE],
        [Results.ADVANTAGE, Results.ADVANTAGE],
        [Results.ADVANTAGE, Results.ADVANTAGE],
        [Results.TRIUMPH]
    ]
);

module.exports = Proficiency;
