var assert = require('assert');
var Proficiency = require('../eote-model/dice/Proficiency');
var lodash = require('lodash');

describe('Proficiency', function () {
    var die = new Proficiency();
    describe('#name', function () {
        it("name is 'Proficiency'", function () {
            assert.equal("Proficiency", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(Proficiency.prototype.values, roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('number of sides is 12', function () {
            assert.equal(12, die.numberOfSides())
        })
    })
});
