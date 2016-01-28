var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Challenge = function () {
};

Challenge.prototype = new Die(
    "challenge",
    [
        [Effects.BLANK],
        [Effects.FAILURE],
        [Effects.FAILURE],
        [Effects.FAILURE, Effects.FAILURE],
        [Effects.FAILURE, Effects.FAILURE],
        [Effects.THREAT],
        [Effects.THREAT],
        [Effects.FAILURE, Effects.THREAT],
        [Effects.FAILURE, Effects.THREAT],
        [Effects.THREAT, Effects.THREAT],
        [Effects.THREAT, Effects.THREAT],
        [Effects.DESPAIR]
    ]
);

module.exports = Challenge;
