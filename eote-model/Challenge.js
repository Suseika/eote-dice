var Results = require("./Results.js");
var Die = require("./Die.js");

var Challenge = function () {
};

Challenge.prototype = new Die(
    "Challenge",
    [
        [Results.BLANK],
        [Results.FAILURE],
        [Results.FAILURE],
        [Results.FAILURE, Results.FAILURE],
        [Results.FAILURE, Results.FAILURE],
        [Results.THREAT],
        [Results.THREAT],
        [Results.FAILURE, Results.THREAT],
        [Results.FAILURE, Results.THREAT],
        [Results.THREAT, Results.THREAT],
        [Results.THREAT, Results.THREAT],
        [Results.DESPAIR]
    ]
);

module.exports = Challenge;
