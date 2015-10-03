

function playGame(numberOfPlayers) {
	var gameController = new GameController();
	var cardPile = new CardPile();

	var players = gameController.makePlayers(numberOfPlayers);
	var deck = cardPile.makeDeck();

	console.log(JSON.stringify(deck));


}



playGame(4);