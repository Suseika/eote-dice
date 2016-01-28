var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 3001, perMessageDeflate: false});
var _ = require('lodash');
var url = require('url');

var DiceThrow = require("./eote-model/dice/DiceThrow");

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

function diceThrowResult(diceThrowRequest) {
    return {
        playerName: diceThrowRequest.playerName,
        rolls: DiceThrow.fromRequest(diceThrowRequest).resultingRolls()
    };
}
