const express = require('express')

const http = require('http');

const socketio = require("socket.io");

const app = express();

const expressServer = app.listen(4000, () => {
    console.log("Running");
});

const io = socketio(expressServer);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log("a user connected");

    socket.on('disconnect', ()=> {
        console.log('user disconnected');
    })

    socket.on('chat message', (msg) => {
        console.log('message: ', msg);
        io.emit('chat message', msg);
    });

    
})

app.listen(3000, () => {
    console.log("Running");
});
