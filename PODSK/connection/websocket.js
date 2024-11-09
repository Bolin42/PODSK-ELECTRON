module.exports = function SendMessage(messagetext,level){
    const { app, BrowserWindow } = require('electron');
    const WebSocket = require('ws');
    const http = require('http');

    let wss = new WebSocket.Server({ server: http.createServer() });

    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(message) {
            console.log(level , messagetext);
        });

        ws.send(messagetext , level);
    });
}