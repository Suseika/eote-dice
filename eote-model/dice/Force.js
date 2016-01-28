var Effects = require("../effects/Effects.js");
var Die = require("./Die.js");

var Force = function () {
};

Force.prototype = new Die(
    "force",
    [
        [Effects.DARK_SIDE],
        [Effects.DARK_SIDE],
        [Effects.DARK_SIDE],
        [Effects.DARK_SIDE],
        [Effects.DARK_SIDE],
        [Effects.DARK_SIDE],
        [Effects.DARK_SIDE, Effects.DARK_SIDE],
        [Effects.LIGHT_SIDE],
        [Effects.LIGHT_SIDE],
        [Effects.LIGHT_SIDE, Effects.LIGHT_SIDE],
        [Effects.LIGHT_SIDE, Effects.LIGHT_SIDE],
        [Effects.LIGHT_SIDE, Effects.LIGHT_SIDE]
    ]
);

module.exports = Force;
