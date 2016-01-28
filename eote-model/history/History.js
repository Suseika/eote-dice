var History = function () {
    this.diceThrowResults = [];
};
History.prototype.addDiceThrowResult = function (diceThrowResult) {
    this.diceThrowResults.push(diceThrowResult);
};
History.prototype.earlierThrows = function() {
    return this.diceThrowResults;
};

module.exports = History;
