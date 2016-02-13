var _ = require("lodash");
var dieFactory = require("./DieFactory");
var DieRoll = require("./DieRoll");
/**
 *
 * @param {Die[]} dice Thrown dice.
 * @constructor
 */
var DiceThrow = function (dice) {
    this.dice = dice;
};
DiceThrow.prototype.resultingSides = function () {
    return this.dice
        .map(function (die) {
            return new DieRoll(die);
        })
};
DiceThrow.fromRequest = function (parsedObject) {
    return new DiceThrow(
        _.flatten(
            _.keys(parsedObject)
                .map(function (dieName) {
                    return {
                        dieName: dieName,
                        amount: parsedObject[dieName]
                    }
                })
                .filter(function (dieTypeThrow) {
                    return dieTypeThrow .amount > 0;
                })
                .map(function (dieTypeThrow) {
                    var dice = _.range(0, dieTypeThrow.amount)
                        .map(function (i) {
                            var die = dieFactory.createDie(dieTypeThrow.dieName);
                            return die;
                        });
                    return dice;
                })
        )
    );
};

module.exports = DiceThrow;
