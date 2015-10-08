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

        this.player.update(this.cursors, this.shootKey);

    },
    render: function() {
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        //game.debug.bodyInfo(this.player.sprite, 10, 10);
        //game.debug.body(this.player.sprite);
    }
}