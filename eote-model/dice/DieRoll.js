/**
 * Result of rolling a die.
 * @param die {Die} A die to roll.
 * @constructor
 */
var DieSide = function(die) {
    this.dieName = die.name;
    this.effects = die.roll();
};

module.exports = DieSide;
