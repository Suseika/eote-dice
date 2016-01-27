var assert = require('assert');
var Challenge = require('../eote-model/Challenge');
var lodash = require('lodash');

describe('Challenge', function () {
    var die = new Challenge();
    describe('#name', function () {
        it("name is 'Challenge'", function () {
            assert.equal("Challenge", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Challenge.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 12', function () {
            assert.equal(12, die.numberOfSides())
        })
    })
});
