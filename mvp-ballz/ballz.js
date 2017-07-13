var socket = window.io();
var Ballz = function(colorString, x, y) {
  this.colorString = (colorString) ? colorString : "#CCCCCC";
  this.radius = 50;


  this.initSocketAndRender = function() {
    //connect to socket on backend
    //server tells you where to place the circle
  };

};

window.theBall = new Ballz("#FF0000");