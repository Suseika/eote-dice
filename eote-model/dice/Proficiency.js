var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Proficiency = function () {
};

Proficiency.prototype = new Die(
    "proficiency",
    [
        [Effects.BLANK],
        [Effects.SUCCESS],
        [Effects.SUCCESS],
        [Effects.SUCCESS, Effects.SUCCESS],
        [Effects.SUCCESS, Effects.SUCCESS],
        [Effects.ADVANTAGE],
        [Effects.SUCCESS, Effects.ADVANTAGE],
        [Effects.SUCCESS, Effects.ADVANTAGE],
        [Effects.SUCCESS, Effects.ADVANTAGE],
        [Effects.ADVANTAGE, Effects.ADVANTAGE],
        [Effects.ADVANTAGE, Effects.ADVANTAGE],
        [Effects.TRIUMPH]
    ]
);

module.exports = Proficiency;
