
import express from 'express';
import socketio from 'socket.io';

const server = express();

server.get("/setPseudo", (req, res) => {
  console.log(req.query.pseudo);
});

server.listen(8080);
