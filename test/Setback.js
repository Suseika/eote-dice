var assert = require('assert');
var Setback = require('../eote-model/Setback');
var lodash = require('lodash');

describe('Setback', function () {
    var die = new Setback();
    describe('#name', function () {
        it("name is 'Setback'", function () {
            assert.equal("Setback", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Setback.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 6', function () {
            assert.equal(6, die.numberOfSides())
        })
    })
});
