var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3001, perMessageDeflate: false});
var _ = require('lodash');
var url = require('url');

var dieFactory = require("./eote-model/dice/DieFactory");

wss.broadcastNewThrow = function (data) {
    this.clients
        .filter(function (client) {
            return url.parse(client.upgradeReq.url, true).pathname == "/newThrows"
        })
        .forEach(function (client) {
            client.send(JSON.stringify(data));
        });
};

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        wss.broadcastNewThrow(
            diceThrowResult(
                JSON.parse(message)
            )
        );
    });
});

function diceThrowResult(diceThrow) {
    return {
        playerName: diceThrow.playerName,
        rolls: _.keys(diceThrow)
            .map(function (dieTypeName) {
                return {
                    dieTypeName: dieTypeName,
                    amount: diceThrow[dieTypeName]
                }
            })
            .filter(function (dieTypeThrow) {
                return dieTypeThrow.amount > 0;
            })
            .map(function (dieTypeThrow) {
                return _.range(0, dieTypeThrow.amount)
                    .map(function (i) {
                        var die = dieFactory.createDie(dieTypeThrow.dieTypeName);
                        return {
                            dieName: die.name,
                            results: die.roll()
                                .map(function (rollResult) {
                                    return rollResult.name;
                                })
                        };
                    });
            })
    };
}
