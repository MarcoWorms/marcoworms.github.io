/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#ffffff"});

        game.load.atlas('megamen', 'assets/atlas.png', 'assets/atlas.json');
        console.log("Atlas loaded")
    },

    create : function() {
        game.state.start("welcome");
    }

}