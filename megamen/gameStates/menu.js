var menuState = {
    create: function() {
        console.log("Game started");
        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = this.cursors.up;

        this.map = this.game.add.tilemap('tilemap');
        this.groundLayer = this.map.createLayer('Tile Layer 1');
        this.map.setCollisionBetween(1, 100, true, 'Tile Layer 1');



        this.player = new Player(400, 300);
        game.physics.arcade.gravity.y = 700;

        var tutoLabel = game.add.text(80, 50, "<- e -> para andar, ^ para pular",{font: "25px Arial", fill: "#ffffff"});
    },
    update: function() {

        game.physics.arcade.collide(this.player.sprite, this.groundLayer);

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