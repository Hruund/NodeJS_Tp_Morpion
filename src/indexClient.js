const url = window.location.origin;
let socket = io.connect(url);

var myTurn = true,
  symbol;