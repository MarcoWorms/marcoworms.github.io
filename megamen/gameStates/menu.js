/*global game*/
/*global Phaser*/

var menuState = {
    create: function() {
        
        var nameLabel = game.add.text(80, 150, "Megamen",{font: "50px Arial", fill: "#ffffff"});
        
        var startLabel = game.add.text(80, 300, "Aperte espaço para começar",{font: "25px Arial", fill: "#ffffff"});
        
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        spaceKey.onDown.addOnce(this.start, this);
    },
    start: function() {
        game.state.start("play");
    }
}