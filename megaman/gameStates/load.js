/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#ffffff"});


        game.load.image("welcomeBg2", "assets/welcomeBg2.png");
        game.load.image("menuBg", "assets/menuBg.png");

        game.load.atlas('megamen', 'assets/atlas.png', 'assets/atlas.json');
        game.load.image("bullet", "assets/open spritesheet/96.png")

        game.load.atlas("enemy1", "assets/enemy1.png", "assets/enemy1.json");
        game.load.atlas("enemy2", "assets/enemy2.png", "assets/enemy2.json");
        game.load.atlas("enemy3", "assets/enemy3.png", "assets/enemy3.json");

        game.load.tilemap("tilemap", "assets/map2.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.image("tileset", "assets/tilesettransp.png");

        game.load.spritesheet("button1", "assets/button1.png", 200, 60);
        game.load.spritesheet("button2", "assets/button2.png", 200, 60);

    },

    create : function() {
        game.state.start("welcome");
    }

}