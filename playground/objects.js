function Object() {
    this.x = 100;
    this.y = 100;
    this.m = 1;
    this.vx = 2;
    this.vy = 1;

    this.preUpdate = function(deltaTime) {

    }
    this.update = function(deltaTime) {

    }
    this.draw = function(context) {

    }

}

function ObjectWithGravity() {
    this.g = 100;

    this.preUpdate = function(deltaTime) {
        this.vy += this.g * deltaTime;
        this.x += this.vx * deltaTime;
        this.y += this.vy * deltaTime;
    }
}
ObjectWithGravity.prototype = new Object();

function SphereWithGravity() {
    this.r = 10;

    this.draw = function(context) {
        context.fillStyle = "black";
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
    }
}
SphereWithGravity.prototype = new ObjectWithGravity();