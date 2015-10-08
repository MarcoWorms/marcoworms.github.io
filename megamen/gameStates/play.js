var playState = {
    create: function() {

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

        this.player = new Player(100, 450);

        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(20, 'bullet');
        this.bullets.frame =  96;
        this.bullets.setAll('checkWorldBounds', true);
        this.bullets.setAll('outOfBoundsKill', true);

    },
    update: function() {

        game.physics.arcade.collide(this.player.sprite, this.levelLayer);
        game.physics.arcade.collide(this.player.sprite, this.dieLayer, die, null, this);
        game.physics.arcade.collide(this.player.sprite, this.winLayer, win, null, this);

        this.player.update(this.cursors);

        if (this.player.state != "uncontrollable" && this.shootKey.isDown && !this.player.isShooting && !this.player.sprite.body.blocked.right && !this.player.sprite.body.blocked.left) {

            this.player.shoot();
            var bullet = this.bullets.getFirstDead();
            var yOffset = 40;
            var xOffset = 20;

            if (this.player.isJumping) {
                yOffset += 15;
            }

            if (this.player.facing == "right") {
                bullet.reset(this.player.sprite.x + xOffset, this.player.sprite.y - yOffset);
                game.physics.arcade.moveToXY(bullet, game.world.width, bullet.y, 500);
            } else if (this.player.facing == "left") {
                bullet.reset(this.player.sprite.x - xOffset, this.player.sprite.y - yOffset);
                game.physics.arcade.moveToXY(bullet, 0, bullet.y, 500);
            }
        }

        if (this.player.isShooting && game.time.now > this.player.shootingTimer) {
            this.player.isShooting = false;
            this.player.state = "finished shooting"
        }

        function die() {
            this.player.die();
        }

        function win() {
            this.player.win();
        }

    },
    render: function() {
        //game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        //game.debug.bodyInfo(this.player.sprite, 10, 10);
    }
}