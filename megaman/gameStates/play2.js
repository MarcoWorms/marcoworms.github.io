var playState2 = {
    create: function() {

        this.cursors = game.input.keyboard.createCursorKeys();
        this.shootKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        this.map = this.game.add.tilemap('tilemap');
        this.map.addTilesetImage('tileset', 'tileset');
        this.bglLayer = this.map.createLayer('bg2Layer');
        this.levelLayer = this.map.createLayer('level2Layer');
        this.dieLayer = this.map.createLayer('die2Layer');
        this.winLayer = this.map.createLayer('win2Layer');

        this.map.setCollisionBetween(1, 1000, true, 'level2Layer');
        this.map.setCollisionBetween(1, 1000, true, 'die2Layer');
        this.map.setCollisionBetween(1, 1000, true, 'win2Layer');

        this.levelLayer.resizeWorld();

        this.player = new Player(100, 470);

        this.enemy1 = new Enemy(534, 880, 'enemy2', 19, "walker", 12);
        this.enemy2 = new Enemy(600, 1180, 'enemy1', 21, "jumper", 12);

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
        game.physics.arcade.collide(this.enemy1.sprite, this.levelLayer);
        game.physics.arcade.collide(this.enemy2.sprite, this.levelLayer);
        game.physics.arcade.collide(this.player.sprite, this.dieLayer, die, null, this);
        game.physics.arcade.collide(this.player.sprite, this.enemy1.sprite, die, null, this);
        game.physics.arcade.collide(this.player.sprite, this.enemy2.sprite, die, null, this);
        game.physics.arcade.collide(this.player.sprite, this.winLayer, win, null, this);
        game.physics.arcade.collide(this.bullets, this.levelLayer, function(bullet, level) {
            bullet.kill();
        })
        game.physics.arcade.collide(this.bullets, this.enemy1.sprite, function(bullet, enemy) {
            bullet.kill();
            enemy.destroy();
            console.log("ay");
        })
        game.physics.arcade.collide(this.bullets, this.enemy2.sprite, function(bullet, enemy) {
            bullet.kill();
            enemy.destroy();
            console.log("ay");
        })

        this.player.update(this.cursors, this.shootKey);

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


        function die() {
            this.player.die();
        }

        function win() {
            this.player.win();
        }

    },
    render: function() {
        //game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        //game.debug.bodyInfo(this.player.sprite, 20, 20);
        //game.debug.text(this.player.state || '--', 2, 14, "#00ff00");
    }
}