var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Boost = function () {
};

Boost.prototype = new Die(
    "boost",
    [
        [Effects.BLANK],
        [Effects.BLANK],
        [Effects.SUCCESS],
        [Effects.SUCCESS, Effects.ADVANTAGE],
        [Effects.ADVANTAGE, Effects.ADVANTAGE],
        [Effects.ADVANTAGE]
    ]
);

module.exports = Boost;
