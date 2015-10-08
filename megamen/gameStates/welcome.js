/*global game*/
/*global Phaser*/

var welcomeState = {
    create: function() {

    	var bg = game.add.sprite(0,0,"welcomeBg2");
        
        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        spaceKey.onDown.addOnce(this.start, this);
    },
    start: function() {
        game.state.start("menu");
    }
}