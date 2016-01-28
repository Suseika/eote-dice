/**
 * Result of rolling a die.
 * @param die {Die} A die to roll.
 * @constructor
 */
var DieRoll = function(die) {
    this.dieName = die.name;
    this.result = die.roll();
};

module.exports = DieRoll;
