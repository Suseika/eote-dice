var assert = require('assert');
var Die = require('../eote-model/Die');
var lodash = require('lodash');

describe('Die', function () {
    var die = new Die(
        "dudeman",
        ["apple", "bapple", "capple"]
    );
    describe('#name', function () {
        it('returns name specified in the constructor', function () {
            assert.equal("dudeman", die.name);
        });
    });
    describe('#roll()', function () {
        it('returns one of specified possible values', function () {
            var roll = die.roll();
            assert(
                lodash.contains(["apple", "bapple", "capple"], roll)
            )
        })
    });
    describe('#numberOfSides()', function () {
        it('returns one of specified possible values', function () {
            assert.equal(3, die.numberOfSides())
        })
    })
});
