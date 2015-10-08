/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#ffffff"});

        game.load.atlas('megamen', 'assets/atlas.png', 'assets/atlas.json');

        game.load.tilemap("tilemap", "assets/map.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.image("tileset", "assets/tilesettransp.png");

        game.load.spritesheet("button1", "assets/button1.png", 200, 60);
        game.load.spritesheet("button2", "assets/button2.png", 200, 60);

    },

    create : function() {
        game.state.start("welcome");
    }

}