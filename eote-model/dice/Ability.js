var Results = require("./../results/Results.js");
var Die = require("./Die.js");

var Ability = function () {
};

Ability.prototype = new Die(
    "ability",
    [
        [Results.BLANK],
        [Results.SUCCESS],
        [Results.SUCCESS],
        [Results.SUCCESS, Results.SUCCESS],
        [Results.ADVANTAGE],
        [Results.ADVANTAGE],
        [Results.SUCCESS, Results.ADVANTAGE],
        [Results.ADVANTAGE, Results.ADVANTAGE]
    ]
);

module.exports = Ability;
