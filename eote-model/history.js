var History = function () {
    this.archive = [];
};
History.prototype.addDiceThrowResult = function (diceThrowResult) {
    this.archive.push(diceThrowResult);
};

module.exports = new History();
