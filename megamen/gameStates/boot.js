var bootState = {
    create : function() {
        console.log("Booting...")
        /*global game*/ 
        /*global Phaser*/ 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.state.start('load');
    }
}