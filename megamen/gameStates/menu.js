var menuState = {
    create: function() {

        game.stage.backgroundColor = "#005C34";

        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = this.cursors.up;

        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tileset', 'tileset');
        this.levelLayer = this.map.createLayer('levelLayer');
        this.map.setCollisionBetween(1, 100, true, 'levelLayer');
        this.levelLayer.resizeWorld();

        this.player = new Player(50, 10);
        game.physics.arcade.gravity.y = 700;

        var tutoLabel = game.add.text(80, 50, "<- e -> para andar, ^ para pular",{font: "25px Arial", fill: "#ffffff"});
    },
    update: function() {

        game.physics.arcade.collide(this.player.sprite, this.levelLayer);

        if (this.player.isJumping && this.player.sprite.body.onFloor()) {
            this.player.isJumping = false;
            this.player.state = "finished jumping"
        }

        if (this.cursors.right.isDown) {
            this.player.moveX(220);
        } else if (this.cursors.left.isDown) {
            this.player.moveX(-220);
        } else {
            this.player.moveX(0);
        }

        if (this.jumpButton.isDown)
        {
            this.player.jump();
        }

    }
}