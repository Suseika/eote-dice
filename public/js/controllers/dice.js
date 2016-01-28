/**
 * @param route Part of the URI after the host name and port, including "/"
 * @returns {WebSocket}
 */
var createWebSocket = function (route) {
    return new WebSocket('ws://' + window.location.hostname + ':3001' + route)
};

angular.module("diceApp", [])

    .service('nameService', function () {
        return {
            playerName: "John Doe"
        }
    })
    .controller("NameController", function ($scope, nameService) {
        $scope.$watch(
            function () {
                return $scope.playerName
            },
            function (newValue) {
                nameService.playerName = newValue
            }
        )
    })
    .controller("DiceSelectionController", function ($scope, nameService) {
        var diceSelection = this;
        diceSelection.types = [
            "ability",
            "boost",
            "challenge",
            "difficulty",
            "force",
            "proficiency",
            "setback"
        ];
        diceSelection.selected = {
            ability: 0,
            boost: 0,
            challenge: 0,
            difficulty: 0,
            force: 0,
            proficiency: 0,
            setback: 0
        };
        diceSelection.selectDice = function (typeName, index) {
            diceSelection.selected[typeName] = index + 1;
        };
        diceSelection.selectedDice = function (dieType) {
            return _.range(0, diceSelection.selected[dieType])
        };
        diceSelection.unselectedDice = function (dieType) {
            return _.range(diceSelection.selected[dieType], 5)
        };
        diceSelection.resetAll = function () {
            diceSelection.selected.ability = 0;
            diceSelection.selected.boost = 0;
            diceSelection.selected.challenge = 0;
            diceSelection.selected.difficulty = 0;
            diceSelection.selected.force = 0;
            diceSelection.selected.proficiency = 0;
            diceSelection.selected.setback = 0;
        };

        diceSelection.roll = function () {
            var webSocket = createWebSocket("/roll");
            webSocket.onopen = function () {
                webSocket.send(
                    JSON.stringify(
                        {
                            playerName: nameService.playerName,
                            diceThrow: diceSelection.selected
                        }
                    )
                );
                webSocket.close()
            };
        };
    })
    .controller("HistoryController", function ($scope) {
        var history = this;
        history.throwResults = [];

        var dataStream = createWebSocket("/newThrows");

        dataStream.onmessage = function (message) {
            var items = JSON.parse(message.data);
            for (i in items) {
                history.throwResults.push(items[i])
            }
            $scope.$apply();
        };
    });