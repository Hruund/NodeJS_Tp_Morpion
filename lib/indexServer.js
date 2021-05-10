"use strict";

var _express = _interopRequireDefault(require("express"));

var _socket = _interopRequireDefault(require("socket.io"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = (0, _express.default)();
server.get("/setPseudo", (req, res) => {
  console.log(req.query.pseudo);
});
server.listen(8080);