/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#ffffff"});

        //spritesheet needs fixing
        game.load.spritesheet("megamen", "assets/spritesheet.jpg");
        game.load.atlas('megamen', 'assets/atlas.png', 'assets/atlas.json', Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY);
    },

    create : function() {
        game.state.start("welcome");
    }

}