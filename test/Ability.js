var assert = require('assert');
var Ability = require('../eote-model/dice/Ability');
var lodash = require('lodash');

describe('Ability', function () {
    var die = new Ability();
    describe('#name', function () {
        it("name is 'Ability'", function () {
            assert.equal("Ability", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Ability.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 8', function () {
            assert.equal(8, die.numberOfSides())
        })
    })
});
