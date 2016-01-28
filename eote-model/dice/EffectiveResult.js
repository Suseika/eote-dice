var _ = require('lodash');
/**
 * Effective results of rolling dice.
 * @param {DieRoll[]} dieRolls
 * @constructor
 */
var EffectiveResult = function (dieRolls) {
    var rawSuccess = countResults(dieRolls, "success");
    var rawAdvantage = countResults(dieRolls, "advantage");
    var rawFailure = countResults(dieRolls, "failure");
    var rawThreat = countResults(dieRolls, "threat");
    var darkSide = countResults(dieRolls, "dark_side");
    var lightSide = countResults(dieRolls, "light_side");
    var triumph = countResults(dieRolls, "triumph");
    var despair = countResults(dieRolls, "despair");
    this.success = Math.max(rawSuccess - rawFailure + triumph - despair, 0);
    this.advantage = Math.max(rawAdvantage - rawThreat, 0);
    this.failure = Math.max(rawFailure - rawAdvantage - triumph + despair, 0);
    this.threat = Math.max(rawThreat - rawAdvantage, 0);
    this.dark_side = darkSide;
    this.light_side = lightSide;
    this.despair = despair;
    this.triumph = triumph;
};
/**
 * @param {DieRoll[]} dieRolls Rolls of dice.
 * @param {string} basename Basename of a Result.
 * @returns {Number} Number of results of a particular type.
 */
function countResults(dieRolls, basename) {
    return _.flatten(
        dieRolls
            .map(function (roll) {
                return roll.result
            })
        )
        .filter(function (result) {
            return result.basename == basename
        })
        .length
}

module.exports = EffectiveResult;
