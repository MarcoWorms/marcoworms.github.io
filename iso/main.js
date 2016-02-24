
function Game(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    
    this.start = function() {
        this.fillBackground(canvas, context);
        this.drawTitle(canvas, context, 'IsoRPGeqStart', '#FFFFFF');
    };
    
    this.fillBackground = function() {
        var grd = context.createLinearGradient(0, 0, this.canvas.width, this.canvas.height);
        grd.addColorStop(0, '#000000');
        grd.addColorStop(1, '#52bcff');
        this.context.fillStyle = grd;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    
    this.drawTitle = function(canvas, context, title, color) {
        var mt = this.context.measureText(title);
        var xcoord = (this.canvas.width / 2) - (mt.width / 2);
        this.context.fillStyle = color;
        this.context.fillText(title, xcoord, 50);
    };
}

window.onload = function() {
    
  var canvas = document.getElementById('gameCanvas');
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  
  var context = canvas.getContext('2d');
  context.font = 'bold 16px Arial, sans-serif';
  
  var game = new Game(canvas, context);
  
  game.start();
  
};