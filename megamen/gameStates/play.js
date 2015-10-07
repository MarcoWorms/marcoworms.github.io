var playState = {
    create: function() {

        game.stage.backgroundColor = "#005C34";

        this.cursors = game.input.keyboard.createCursorKeys();
        this.shootKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tileset', 'tileset');
        this.bglLayer = this.map.createLayer('bgLayer');
        this.levelLayer = this.map.createLayer('level1Layer');
        this.dieLayer = this.map.createLayer('die1Layer');
        this.winLayer = this.map.createLayer('win1Layer');

        this.map.setCollisionBetween(1, 500, true, 'level1Layer');
        this.map.setCollisionBetween(1, 500, true, 'die1Layer');
        this.map.setCollisionBetween(1, 500, true, 'win1Layer');

        this.levelLayer.resizeWorld();

        this.player = new Player(100, 300);



        game.physics.arcade.gravity.y = 700;

    },
    update: function() {

        game.physics.arcade.collide(this.player.sprite, this.levelLayer);
        game.physics.arcade.collide(this.player.sprite, this.dieLayer, die, null, this);
        game.physics.arcade.collide(this.player.sprite, this.winLayer, win, null, this);

        if (this.player.isJumping && game.time.now > this.player.jumpingTimer && (this.player.sprite.body.onFloor() || this.player.sprite.body.blocked.left || this.player.sprite.body.blocked.right)) {
           this.player.isJumping = false;
           this.player.state = "finished jumping"
        }

        if (this.cursors.right.isDown && game.time.now > this.player.jumpingTimer) {
            this.player.moveX(220);
        } else if (this.cursors.left.isDown && game.time.now > this.player.jumpingTimer) {
            this.player.moveX(-220);
        } else if (game.time.now > this.player.jumpingTimer) {
            this.player.moveX(0);
        }

        if (this.cursors.up.isDown) {
            this.player.jump();
        }

        if (this.shootKey.isDown && !this.player.isShooting) {
            this.player.shoot();
        } else if (!this.shootKey.isDown && this.player.isShooting && game.time.now > this.player.shootingTimer) {
            this.player.isShooting = false;
            if (this.player.isJumping) {
                this.player.sprite.frame = 24;
            }
        }



        function die() {
            game.state.start("menu")
        }

        function win() {
            game.state.start("menu")
        }

    },
    render: function() {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        //game.debug.bodyInfo(this.player.sprite, 0, 0);
        //game.debug.body(this.player.sprite);
    }
}