function Ball(x, y, r, color, vx, vy) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.bounce = 1;
    this.vx = vx;
    this.vy = vy;

    this.update = function(dt, canvas) {

        //this.vy += 600*dt;
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.checkOutOfBounds(canvas);

    }

    this.draw = function(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
    }

    this.checkOutOfBounds = function(canvas) {
        if (this.x - this.r <= 0) {
            this.x = 0 + this.r;
            this.vx *= -this.bounce;
        } else if (this.x + this.r >= canvas.width) {
            this.x = canvas.width - this.r;
            this.vx *= -this.bounce;
        }

        if (this.y - this.r <= 0) {
            this.y = 0 + this.r;
            this.vy *= -this.bounce;
        } else if (this.y + this.r >= canvas.height) {
            this.y = canvas.height - this.r;
            this.vy *= -this.bounce;
        }
    }



}

function Game() {

    this.canvas = document.getElementById('game');
    this.context = this.canvas.getContext('2d');
    this.t1 = new Date().getTime();
    this.t0 = new Date().getTime();
    this.dt = new Date().getTime();

    this.canvas.width = document.body.clientWidth -4;
    this.canvas.height = 800;

    this.start = function(nBalls, maxSpeed, radius, clearCanvas, backgroundColor) {
        this.clearCanvas = clearCanvas;
        this.backgroundColor = backgroundColor;
        this.balls = [];
        for (var i = nBalls; i > 0; i--) {
            this.balls.push(new Ball(
                                    Math.random() * this.canvas.width, // x
                                    Math.random() * this.canvas.height, // y
                                    radius, // r
                                    this.randomColor(), //color
                                    this.randomSpeedValue(maxSpeed), // vx
                                    this.randomSpeedValue(maxSpeed) // vy
                                )
                            );
        };
        if (backgroundColor === "random") {
            this.bgColor = this.randomColor();
        } else {
            this.bgColor = backgroundColor
        }
        this.mainLoop();
    }

    this.stop = function() {
        window.cancelAnimationFrame(this.loop)
    }

    this.mainLoop = function() {
        this.loop = window.requestAnimationFrame(this.mainLoop.bind(this), this.canvas);
        this.t1 = new Date().getTime(); // current time in milliseconds
        this.dt = 0.001*(this.t1-this.t0); // time elapsed in seconds since last call
        this.t0 = this.t1; // reset t0
        this.update();
        this.draw();
    }

    this.update = function() {
        for (var ball in this.balls) {
            this.balls[ball].update(this.dt, this.canvas);
        }
    }

    this.draw = function() {
        if (this.clearCanvas) {
            this.cleanBackground();
        }
        for (var ball in this.balls) {
            this.balls[ball].draw(this.context);
        }
    }

    this.cleanBackground = function() {
        this.context.fillStyle = this.bgColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.randomSpeedValue = function(max) {
        var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        return Math.random() * max * plusOrMinus;
    }

    this.randomColor = function() {
        return '#'+Math.floor(Math.random()*16777216).toString(16);
    }

}

function go() {
    game.stop();
    var nBalls = document.getElementById("nBalls").value
    var speed = document.getElementById("speed").value
    var radius = document.getElementById("radius").value
    var clearCanvas = document.getElementById("clearCanvas").value
    var backgroundColor = document.getElementById("backgroundColor").value
    game.start(Number(nBalls), Number(speed), Number(radius), Number(clearCanvas), String(backgroundColor));
    game.cleanBackground(String(backgroundColor));
}

var game = new Game();

document.getElementById("apply").addEventListener("click", go);

go();