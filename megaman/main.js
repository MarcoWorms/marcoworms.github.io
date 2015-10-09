/*global Phaser*/
/*global bootState*/
/*global loadState*/
/*global menuState*/
/*global playState*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, "gameDiv");


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('welcome', welcomeState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('play2', playState2);

game.state.start('boot');