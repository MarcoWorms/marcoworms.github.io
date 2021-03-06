function Object() {
    this.x = 100; // x position in canvas
    this.y = 100; // y position in canvas
    this.m = 1; // mass
    this.e = 0.95; // elasticity
    this.vx = 500; // velocity X
    this.vy = -100; // velocity Y
    this.v = function() {
        return Math.sqrt(Math.pow(this.vx, 2) + Math.pow(this.vy, 2))
    }
    this.angle = function() {

    }

    this.preUpdate = function(deltaTime) {

    }
    this.update = function(deltaTime) {

    }
    this.draw = function(context) {

    }

    this.toRadians = function(angle) {
        return angle * (Math.PI / 180);
    }

    this.setAngleAndVelocity = function(angle, speed) {
        this.vx = speed * Math.cos(this.toRadians(angle));
        this.vy = speed * -Math.sin(this.toRadians(angle));
    }

    this.bounce = function(toAngle) {
        this.vx = this.vx * Math.cos(this.toRadians(toAngle)) * this.e;
        this.vy = this.vy * -Math.sin(this.toRadians(toAngle)) * this.e;
    }

    // To be rewritten with a single bounce(angle).
    this.bounceX = function() {
        this.vx *= -this.e;
    }
    this.bounceY = function() {
        this.vy *= -this.e;
    }

}

function ObjectWithGravity() {
    this.g = 500; // gravity

    this.preUpdate = function(deltaTime) {
        this.vy += this.g * deltaTime;
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
    }
}
ObjectWithGravity.prototype = new Object();

function SphereWithGravity() {
    this.r = 10; // radius

    this.draw = function(context) {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
    }
}
SphereWithGravity.prototype = new ObjectWithGravity();

function BouncingSphereWithGravity() {
    this.update = function() {
        console.log(this.v())
        var bottomBound = this.y + this.r;
        if (bottomBound > 600) {
            this.y += 600 - bottomBound
            this.bounceY();
        }
        var topBound = this.y - this.r;
        if (topBound < 0) {
            this.y += 0 - topBound
            this.bounceY();
        }
        var rightBound = this.x + this.r;
        if (rightBound > 800) {
            this.x += 800 - rightBound
            this.bounceX();
        }
        var leftBound = this.x - this.r;
        if (leftBound < 0) {
            this.x += 0 - leftBound
            this.bounceX();
        }

    }
}
BouncingSphereWithGravity.prototype = new SphereWithGravity();