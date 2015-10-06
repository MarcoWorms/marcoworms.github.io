var menuState = {
    create: function() {
        console.log("Game started");
        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = this.cursors.up;
        this.player = new Player(400, 300);
        game.physics.arcade.gravity.y = 700;
    },
    update: function() {

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