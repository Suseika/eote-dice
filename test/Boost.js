var assert = require('assert');
var Boost = require('../eote-model/dice/Boost');
var lodash = require('lodash');

describe('Boost', function () {
    var die = new Boost();
    describe('#name', function () {
        it("name is 'Boost'", function () {
            assert.equal("Boost", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Boost.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 6', function () {
            assert.equal(6, die.numberOfSides())
        })
    })
});
