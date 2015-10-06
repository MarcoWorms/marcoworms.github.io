function Player(x, y) {
	this.x = x;
	this.y = y;
	this.sprite = game.add.sprite(400, 300, "megamen");
    this.state = "none";
    this.facing = "none";


    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.sprite.scale.x = 2;
    this.sprite.scale.y = 2;

    this.sprite.animations.add("spawn", [0,1,2,3,4,5,6], 10);
    this.sprite.animations.add("walk", [11,12,13,14,15,16,17,18,19,20], 10, true);

    var spawn = this.sprite.animations.play("spawn");
    this.state = "spawning";
    spawn.onComplete.add(function(){
        this.state = "idle";
        this.sprite.frame = 7;
    }, this);

    this.moveX = function(velocityX) {

        if (this.state == "spawning") {
            return;
        }

        this.sprite.body.velocity.x = velocityX;

        if (velocityX == 0) {
            if (this.state != "idle") {
                this.sprite.animations.stop();
                this.state = "idle";
                this.sprite.frame = 7;
            }
            return;
        }

        if (velocityX > 0 && this.facing != "right") {
            this.sprite.scale.x = 2;
            this.facing = "right"
        }

        if (velocityX < 0 && this.facing != "left") {
            this.sprite.scale.x = -2;
            this.facing = "left"
        }

        if (this.state != "walking") {
            this.state = "walking";
            this.sprite.animations.play("walk");
        }
    }

}