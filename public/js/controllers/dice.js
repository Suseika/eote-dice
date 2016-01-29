/**
 * @param route Part of the URI after the host name and port, including "/"
 * @returns {WebSocket}
 */
var createWebSocket = function (route) {
    return new WebSocket(window.location.origin.replace('http', 'ws') + route)
};

angular.module("diceApp", [])
    .service('nameService', function () {
        return {}
    })
    .controller("NameController", function ($scope, nameService) {
        var savedName = localStorage.getItem("playerName");
        if (!savedName) {
            $scope.playerName = "John Doe";
        } else {
            $scope.playerName = savedName;
        }
        $scope.$watch(
            function () {
                return $scope.playerName
            },
            function (newValue) {
                nameService.playerName = newValue;
                localStorage.setItem("playerName", newValue);
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
        diceSelection.nameIsUnavailable = function () {
            return nameService.playerName == "";
        };
        diceSelection.rollIsDisabled = function () {
            return diceSelection.nameIsUnavailable()
                || !diceSelection.anyDiceAreSelected()
        };
        diceSelection.anyDiceAreSelected = function () {
            return _.values(diceSelection.selected)
                    .reduce(
                        function (a, b) {
                            return a + b
                        },
                        0
                    ) > 0
        };
        diceSelection.openRoll = function () {
            diceSelection.roll(false);
        };
        diceSelection.secretRoll = function () {
            diceSelection.roll(true);
        };
        diceSelection.roll = function (secret) {
            var webSocket = createWebSocket("/roll");
            webSocket.onopen = function () {
                webSocket.send(
                    JSON.stringify(
                        {
                            playerName: nameService.playerName,
                            diceThrow: diceSelection.selected,
                            secret: secret
                        }
                    )
                );
                webSocket.close()
            };
        };
        diceSelection.rowIsEmpty = function (dieType) {
            return diceSelection.selected[dieType] == 0;
        };
        diceSelection.resetRow = function (dieType) {
            diceSelection.selected[dieType] = 0;
        }
    })
    .controller("HistoryController", function ($scope, nameService) {
        var history = this;
        history.throwResults = [];

        var dataStream = createWebSocket("/newThrows");

        dataStream.onmessage = function (message) {
            var data = JSON.parse(message.data);
            if (data.hasOwnProperty("archive")) {
                data.archive.forEach(function (entry) {
                    history.throwResults.push(entry);
                })
            } else {
                history.throwResults.push(data);
            }
            $scope.$apply();
        };
        setInterval(function () {
            dataStream.send("{\"ping\": 1}")
        }, 15000);

        history.totalEffects = function (throwResult) {
            return _.flatten(
                _.keys(throwResult.effects)
                    .map(function (basename) {
                        return _.range(0, throwResult.effects[basename])
                            .map(function (i) {
                                return basename;
                            })
                    })
            );
        };
        history.visibleThrowResults = function () {
            return history.throwResults
                .slice(0)
                .reverse()
                .filter(function (result) {
                    return result.secret == false || result.playerName == nameService.playerName
                })
        }
    });
