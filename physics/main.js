function Ball(x, y, r, color) {
	this.x = x;
   	this.y = y;
    this.r = r;
    this.vx = Math.random() * 500 + 2000;
    this.vy = Math.random() * 500 + 2000;
    this.color = color;
    
    this.update = function(dt) {
        
        this.vy += 600*dt;
    	this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.checkOutOfBounds();
        
    }
    
    this.draw = function(context) {
     	context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
    }
    
    this.checkOutOfBounds = function() {
    	if (this.x - this.r <= 0) {
    	    this.x = 0 + this.r;
        	this.vx *= -0.95;
        } else if (this.x + this.r >= 800) {
    	    this.x = 800 - this.r;
        	this.vx *= -0.95;
        }
        
        if (this.y - this.r <= 0) {
            this.y = 0 + this.r;
        	this.vy *= -0.95;
        } else if (this.y + this.r >= 600) {
            this.y = 600 - this.r;
        	this.vy *= -0.95;
        }
    }
}

function Game() {
    
    this.canvas = document.getElementById('game');
	this.context = this.canvas.getContext('2d');
	this.t1 = new Date().getTime();;
	this.t0 = new Date().getTime();;
	this.dt = new Date().getTime();;
    
    this.start = function() {
        this.ball = new Ball(Math.random() * 800, Math.random() * 600, 20, "#ff0000");
        this.ball2 = new Ball(Math.random() * 800, Math.random() * 600, 20, "#00ff00");
        this.ball3 = new Ball(Math.random() * 800, Math.random() * 600, 20, "#0000ff");
        this.mainLoop();
    }
    
    this.mainLoop = function() {
        window.requestAnimationFrame(window.game.mainLoop.bind(this), this.canvas);
        this.t1 = new Date().getTime(); // current time in milliseconds
        this.dt = 0.001*(this.t1-this.t0); // time elapsed in seconds since last call
        this.t0 = this.t1; // reset t0
    	this.update();
    	this.draw();
	}
 	
    this.update = function() {
    	this.ball.update(this.dt);
    	this.ball2.update(this.dt);
    	this.ball3.update(this.dt);
    }
    
    this.draw = function() {
        //this.clearCanvas();
		this.ball.draw(this.context);
		this.ball2.draw(this.context);
		this.ball3.draw(this.context);
    }
    
    this.clearCanvas = function() {
        this.context.fillStyle = "#FFFFFF";
        this.context.fillRect(0, 0, 800, 600);
    }
    
}

var game = new Game();

game.start();