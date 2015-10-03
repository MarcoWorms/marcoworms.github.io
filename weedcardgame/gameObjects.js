function GameController() {
	this.makePlayers = function(numberOfPlayers) {
		var players = {}

		for (var i = numberOfPlayers; i > 0; i--) {
			var playerName = "player" + String(i);
			players[playerName] = new Player();
		};

		return players;
	}
}

function Player() {
	this.hand = [];
	this.field = [];
	this.points = 0;

	this.removeFromHand = function(card) {
		var cardIndex = this.hand.indexOf(card);
		this.hand.splice(cardIndex, 1);
	}

	this.addToHand = function(card) {
		this.hand.push(card);
	}

	this.removeFromField = function(card) {
		var cardIndex = this.field.indexOf(card);
		this.field.splice(cardIndex, 1);
	}

	this.addToField = function(card) {
		this.field.push(card);
	}

}

function CardPile() {

	this.deck = [];

	// Dictionary with all types of cards in the game
	this.cardInstances = {
		"Weed1"				: new WeedCard(1),
		"Weed2"				: new WeedCard(2),
		"Weed3"				: new WeedCard(3),
		"Weed4"				: new WeedCard(4),
		"Weed5"				: new WeedCard(5),
		"Weed6"				: new WeedCard(6),
		//"Steal"				: new StealCard(),
		//"WeedKiller"		: new WeedKillerCard(),
		//"Dandelion"			: new DandelionCard(),
		//"Hippie"			: new HippieCard(),
		//"Busted"			: new BustedCard(),
		//"Potzilla"			: new Potzilla()
	}

	// Dictionary with the ammount of cards for each type
	this.cardAmmount = {
		"Weed1"				: 10,
		"Weed2"				: 10,
		"Weed3"				: 6,
		"Weed4"				: 4,
		"Weed5"				: 2,
		"Weed6"				: 1,
		//"Steal"				: 5,
		//"WeedKiller"		: 5,
		//"Dandelion"			: 5,
		//"Hippie"			: 4,
		//"Busted"			: 2,
		//"Potzilla"			: 1
	}


	this.makeDeck = function() {
		var deck = [];

		for (card in this.cardInstances) {
			var ammount = this.cardAmmount[card];

			for (var i = ammount; i > 0; i--) {
				var cardInstance = this.cardInstances[card];
				deck.push(cardInstance);
			}
		}

		return deck;
	}

}

function Card() {
	this.name = "Unnamed card";

	this.click = function() {
		this.action();
	}
}

function WeedCard(value) {
	this.name = "Weed" + String(value);

	this.value = value;
	
	this.action = function(player) {
		player.removeFromHand(this);
		player.addToField(this);
	}

}
WeedCard.prototype = new Card();







