var Results = require("./Results.js");
var Die = require("./Die.js");

var Setback = function () {
};

Setback.prototype = new Die(
    "Setback",
    [
        [Results.BLANK],
        [Results.BLANK],
        [Results.FAILURE],
        [Results.FAILURE],
        [Results.THREAT],
        [Results.THREAT]
    ]
);

module.exports = Setback;
