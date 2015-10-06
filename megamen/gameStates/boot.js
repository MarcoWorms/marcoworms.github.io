/*global game*/ 
/*global Phaser*/ 

var bootState = {
    create : function() {
        console.log("Booting...")
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.state.start('load');
    }
}