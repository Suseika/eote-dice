var Ability = require("./Ability");
var Boost = require("./Boost");
var Challenge = require("./Challenge");
var Difficulty = require("./Difficulty");
var Force = require("./Force");
var Proficiency = require("./Proficiency");
var Setback = require("./Setback");

var DieFactory = function() {

};
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

DieFactory.prototype.createDie = function(name) {
    if (name == "ability") {
        return new Ability()
    } else if (name == "boost") {
        return new Boost()
    } else if (name == "difficulty") {
        return new Difficulty()
    } else if (name == "challenge") {
        return new Challenge()
    } else if (name == "force") {
        return new Force()
    } else if (name == "proficiency") {
        return new Proficiency()
    } else if (name == "setback") {
        return new Setback()
    } else {
        throw new Error("Illegal die name "+name)
    }
};
module.exports = new DieFactory();
