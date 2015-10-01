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

// Item Types ----------------------
function Pickaxe() {
    this.itemType = "pickaxe";
}
Pickaxe.prototype = new GatheringItem();

function Gloves() {
    this.itemType = "gloves";
}
Gloves.prototype = new GatheringItem();


// Pickaxes ------------------------
function BadPickaxe() {
    this.name = "Bad Pickaxe"
    this.gatheringRate = 1600
    this.action = function(player, rng) {

        if (rng <= 70000) {
            player.ores["Copper"] += 1;
        }

        if (rng >= 30000) {
            player.ores["Tin"] += 1;
        }
    }
}
BadPickaxe.prototype = new Pickaxe();

function BronzePickaxe() {
	this.name = "Bronze Pickaxe"
    this.gatheringRate = 1300
	this.action = function(player, rng) {

		if (rng <= 70000) {
			player.ores["Copper"] += 1;
		}

		if (rng >= 30000) {
			player.ores["Tin"] += 1;
		}

		if (rng <= 25000) {
			player.ores["Iron"] += 1;
		}
	}
}
BronzePickaxe.prototype = new Pickaxe();

function IronPickaxe() {
    this.name = "Iron Pickaxe"
    this.gatheringRate = 1150
    this.action = function(player, rng) {

        if (rng <= 90000) {
            player.ores["Copper"] += 1;
        }

        if (rng >= 10000) {
            player.ores["Tin"] += 1;
        }

        if (rng <= 40000) {
            player.ores["Iron"] += 1;
        }

        if (rng <= 10000) {
            player.ores["Coal"] += 1;
        }
    }
}
IronPickaxe.prototype = new Pickaxe();

// Gloves --------------------------
function BadGloves() {
    this.name = "Bad Gloves"
    this.gatheringRate = 3000
    this.action = function(player, rng) {

        if (rng <= 30000) {
            if (player.ores["Copper"] >= 10 && player.ores["Tin"] >= 10) {
                player.ores["Copper"] -= 10;
                player.ores["Tin"] -= 10;
                player.bars["Bronze"] += 1;
            }

        }

    }
}
BadGloves.prototype = new Gloves();

function BronzeGloves() {
	this.name = "Bronze Gloves"
    this.gatheringRate = 2700
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
BronzeGloves.prototype = new Gloves();

function IronGloves() {
    this.name = "Iron Gloves"
    this.gatheringRate = 2500
    this.action = function(player, rng) {

        if (rng <= 70000) {
            if (player.ores["Copper"] >= 10 && player.ores["Tin"] >= 10) {
                player.ores["Copper"] -= 10;
                player.ores["Tin"] -= 10;
                player.bars["Bronze"] += 1;
            }
        }

        if (rng <= 20000) {
            if (player.ores["Iron"] >= 10) {
                player.ores["Iron"] -= 10;
                player.bars["Iron"] += 1;
            }
        }

        if (rng <= 10000) {
            if (player.ores["Iron"] >= 5 && player.ores["Coal"] >= 10) {
                player.ores["Iron"] -= 5;
                player.ores["Coal"] -= 10;
                player.bars["Steel"] += 1;
            }
        }

    }
}
IronGloves.prototype = new Gloves();
