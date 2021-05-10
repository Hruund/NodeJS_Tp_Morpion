console.log('Nothing implemented yet');

const http = require("http"),
  express = require("express"),
  app = express(),
  socketIo = require("socket.io");

const server = http.Server(app).listen(8080);
const io = socketIo(server);
const clients = {};

const addClient = socket => {
    console.log("New client connected", socket.id);
    clients[socket.id] = socket;
};

const removeClient = socket => {
    console.log("Client disconnected", socket.id);
    delete clients[socket.id];
};