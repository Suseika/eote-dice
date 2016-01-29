var History = function () {
    this.archive = [];
};
History.prototype.addDiceThrowResult = function (diceThrowResult) {
    this.archive.push(diceThrowResult);
};
History.prototype.clear = function() {
    this.archive = [];
};

module.exports = new History();
