var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Difficulty = function () {
};

Difficulty.prototype = new Die(
    "difficulty",
    [
        [Effects.BLANK],
        [Effects.FAILURE],
        [Effects.FAILURE, Effects.FAILURE],
        [Effects.THREAT],
        [Effects.THREAT],
        [Effects.THREAT],
        [Effects.THREAT, Effects.THREAT],
        [Effects.FAILURE, Effects.THREAT]
    ]
);

module.exports = Difficulty;
