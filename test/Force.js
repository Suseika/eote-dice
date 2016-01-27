var assert = require('assert');
var Force = require('../eote-model/Force');
var lodash = require('lodash');

describe('Force', function () {
    var die = new Force();
    describe('#name', function () {
        it("name is 'Force'", function () {
            assert.equal("Force", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Force.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 12', function () {
            assert.equal(12, die.numberOfSides())
        })
    })
});
