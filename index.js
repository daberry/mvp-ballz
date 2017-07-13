// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('.')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/mvp-ballz'));

// Chatroom


io.on('connection', function (socket) {

  socket.on('click', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('newPosition', {
      x: data.x,
      y: data.y
    });
    console.log('click', data.x, data.y);

  });

});
