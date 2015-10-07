/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#ffffff"});

        game.load.atlas('megamen', 'assets/atlas.png', 'assets/atlas.json');

        game.load.tilemap("tilemap", "assets/map.json", null, Phaser.Tilemap.TILED_JSON);
        game.load.image("tileset", "assets/tileset.png");

    },

    create : function() {
        game.state.start("welcome");
    }

}