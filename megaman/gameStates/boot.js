/*global game*/
/*global Phaser*/

var bootState = {
    create : function() {
        console.log("Booting...")

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.smoothed = false;
        game.time.advancedTiming = true;

        game.state.start('load');
    }
}