var assert = require('assert');
var Difficulty = require('../eote-model/dice/Difficulty');
var lodash = require('lodash');

describe('Difficulty', function () {
    var die = new Difficulty();
    describe('#name', function () {
        it("name is 'Difficulty'", function () {
            assert.equal("Difficulty", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Difficulty.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 8', function () {
            assert.equal(8, die.numberOfSides())
        })
    })
});
