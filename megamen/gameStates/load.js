/*global game*/

var loadState = {
    preload: function() {

        var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#ffffff"});
        
        //spritesheet needs fixing
        game.load.spritesheet("megamen", "assets/spritesheet.jpg");
    },
    
    create : function() {
        game.state.start("menu");
    }
    
}