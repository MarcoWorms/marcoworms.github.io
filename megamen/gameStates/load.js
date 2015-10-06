/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...",{font: "30px Arial", fill: "#ffffff"});
        
        //I will load the spritesheet here
        //game.load.image("player", "assets/player")
    },
    
    create : function() {
        game.state.start("menu")
    }
    
}