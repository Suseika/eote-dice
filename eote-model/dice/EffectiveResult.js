var _ = require('lodash');
/**
 * Effective results of rolling dice.
 * @param {DieSide[]} rolledSides
 * @constructor
 */
var EffectiveResult = function (rolledSides) {
    var rawSuccess = countEffects(rolledSides, "success");
    var rawAdvantage = countEffects(rolledSides, "advantage");
    var rawFailure = countEffects(rolledSides, "failure");
    var rawThreat = countEffects(rolledSides, "threat");
    var darkSide = countEffects(rolledSides, "dark_side");
    var lightSide = countEffects(rolledSides, "light_side");
    var triumph = countEffects(rolledSides, "triumph");
    var despair = countEffects(rolledSides, "despair");
    this.success = Math.max(rawSuccess - rawFailure + triumph - despair, 0);
    this.advantage = Math.max(rawAdvantage - rawThreat, 0);
    this.failure = Math.max(rawFailure - rawSuccess - triumph + despair, 0);
    this.threat = Math.max(rawThreat - rawAdvantage, 0);
    this.dark_side = darkSide;
    this.light_side = lightSide;
    this.despair = despair;
    this.triumph = triumph;
};
/**
 * @param {DieSide[]} dieRolls Rolls of dice.
 * @param {string} basename Basename of a Result.
 * @returns {Number} Number of effects of a particular type.
 */
function countEffects(dieRolls, basename) {
    return _.flatten(
        dieRolls
            .map(function (roll) {
                return roll.effects;
            })
        )
        .filter(function (result) {
            return result.basename == basename;
        })
        .length
}

module.exports = EffectiveResult;
