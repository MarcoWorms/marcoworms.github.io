function Player(x, y) {
	this.x = x;
	this.y = y;
	this.sprite = game.add.sprite("megamen")
    this.sprite.animations.add("spawn",[0,1,2,3,4,5,6]);


    this.sprite.animations.play("spawn", 24, false);

}