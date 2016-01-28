var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Setback = function () {
};

Setback.prototype = new Die(
    "setback",
    [
        [Effects.BLANK],
        [Effects.BLANK],
        [Effects.FAILURE],
        [Effects.FAILURE],
        [Effects.THREAT],
        [Effects.THREAT]
    ]
);

module.exports = Setback;
