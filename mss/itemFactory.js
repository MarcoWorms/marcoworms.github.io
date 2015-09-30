var itemFactory = this;

function Item() {
	this.name = "Unnamed Item"
}

function GatheringItem() {
	this.name = "Unnamed Gathering Item"

	this.activate = function(player) {
		var rng = Math.floor((Math.random() * 100000) + 1);
		this.action(player, rng);
	}
	this.action = function(player, rng) {}
}
GatheringItem.prototype = new Item();


function BronzePickaxe() {
	this.name = "Bronze Pickaxe"
    this.gatheringRate = 1500
	this.action = function(player, rng) {

		if (rng <= 70000) {
			player.ores["Copper"] += 1;
		}

		if (rng >= 30000) {
			player.ores["Tin"] += 1;
		}

		if (rng <= 10000) {
			player.ores["Iron"] += 1;
		}
	}
}
BronzePickaxe.prototype = new GatheringItem();

function BronzeGloves() {
	this.name = "Bronze Gloves"
    this.gatheringRate = 3000
	this.action = function(player, rng) {

		if (rng <= 40000) {
			if (player.ores["Copper"] >= 10 && player.ores["Tin"] >= 10) {
				player.ores["Copper"] -= 10;
				player.ores["Tin"] -= 10;
				player.bars["Bronze"] += 1;
			}

		}

		if (rng <= 5000) {
			if (player.ores["Iron"] >= 10) {
				player.ores["Iron"] -= 10;
				player.bars["Iron"] += 1;
			}

		}

	}
}
BronzeGloves.prototype = new GatheringItem();
















