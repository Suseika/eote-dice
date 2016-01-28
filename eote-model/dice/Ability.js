var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Ability = function () {
};

Ability.prototype = new Die(
    "ability",
    [
        [Effects.BLANK],
        [Effects.SUCCESS],
        [Effects.SUCCESS],
        [Effects.SUCCESS, Effects.SUCCESS],
        [Effects.ADVANTAGE],
        [Effects.ADVANTAGE],
        [Effects.SUCCESS, Effects.ADVANTAGE],
        [Effects.ADVANTAGE, Effects.ADVANTAGE]
    ]
);

module.exports = Ability;
