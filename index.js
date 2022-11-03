const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 80;

// access web pages
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/pages/index.html');
});
app.get('/app/projects', (req, res) => {
	res.sendFile(__dirname + '/pages/app/projects.html');
});
app.get('/app/project/new', (req, res) => {
	res.sendFile(__dirname + '/pages/app/project/new.html');
});

// socket.io events
io.on('connection', (socket) => {});

// enable static directory
app.use(express.static('public'));

server.listen(port, () => {
	console.log(`listening on *:${port}`);
});
