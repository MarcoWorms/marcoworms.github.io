function Simulation(width, height) {

    this.canvas = document.getElementById('simulation');
    this.canvas.width = width
    this.canvas.height = height
    this.context = this.canvas.getContext('2d');

    this.loop = undefined;
    this.timeLastFrame = new Date().getTime();

    this.start = function() {
        var ball = new BouncingSphereWithGravity();
        this.objects = [ball];

        window.cancelAnimationFrame(this.loop);
        this.mainLoop();
    }

    this.stop = function() {
        window.cancelAnimationFrame(this.loop);
        this.clearCanvas();
    }

    this.mainLoop = function() {
        this.loop = window.requestAnimationFrame(this.mainLoop.bind(this));
        var timeNow = new Date().getTime();
        var deltaTime = 0.001*(timeNow - this.timeLastFrame); // in seconds
        this.timeLastFrame = timeNow;
        this.updateObjects(deltaTime);
    }

    this.updateObjects = function(deltaTime) {
        for (var i = this.objects.length - 1; i >= 0; i--) {
            this.objects[i].preUpdate(deltaTime);
            this.objects[i].update(deltaTime);
        };
        this.drawObjects();
    }
    this.drawObjects = function() {
        this.clearCanvas();
        for (var i = this.objects.length - 1; i >= 0; i--) {
            this.objects[i].draw(this.context);
        };
    }

    this.clearCanvas = function() {
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}

window.onload = function() {

    var simulation = new Simulation(800, 600);
    simulation.start();

    var startButton = document.getElementById('start');
    startButton.onclick = function() {
        simulation.start();
    }

    var stopButton = document.getElementById('stop');
    stopButton.onclick = function() {
        simulation.stop();
    }

}