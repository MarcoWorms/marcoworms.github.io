var menuState = {
    create: function() {

        game.stage.backgroundColor = "#005C34";

        this.cursors = game.input.keyboard.createCursorKeys();
        this.jumpButton = this.cursors.up;

        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tileset', 'tileset');
        this.bglLayer = this.map.createLayer('bgLayer');
        this.levelLayer = this.map.createLayer('level1Layer');
        this.dieLayer = this.map.createLayer('die1Layer');

        this.map.setCollisionBetween(1, 500, true, 'level1Layer');
        this.map.setCollisionBetween(1, 500, true, 'die1Layer');

        this.levelLayer.resizeWorld();

        this.player = new Player(100, 10);
        game.physics.arcade.gravity.y = 700;

        var tutoLabel = game.add.text(80, 50, "<- e -> para andar, ^ para pular",{font: "25px Arial", fill: "#ffffff"});
    },
    update: function() {

        game.physics.arcade.collide(this.player.sprite, this.levelLayer);
        game.physics.arcade.collide(this.player.sprite, this.dieLayer, die, null, this);

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

        function die() {
            game.state.start("menu")
        }

    },
    render: function() {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
    }
}