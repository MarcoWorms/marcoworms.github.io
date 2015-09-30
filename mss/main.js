(function(){

    game = this;

	var player = {
		"ores" : {
			"Copper" : 0,
			"Tin" : 0,
			"Iron" : 0,
			"Coal" : 0,
			"Mithril" : 0,
			"Adamant" : 0,
			"Runite" : 0
		},
		"bars" : {
			"Bronze" : 0,
			"Iron" : 0,
			"Steel" : 0,
			"Mithril" : 0,
			"Adamant" : 0,
			"Runite" : 0

		},
		"monsters" : {

		},
		"pickaxe" : new itemFactory.BronzePickaxe(),
		"gloves" : new itemFactory.BronzeGloves()
	}

    function mine(player, count, ticks) {

        document.getElementById("mineProg").value = count;

        count += 1/ticks

        if (count < 1) {
            window.setTimeout(function(){mine(player, count, ticks);}, player.pickaxe.gatheringRate/ticks)
        } else {
            player.pickaxe.activate(player);
            mine(player, 0, ticks);
            updateGui(player);

        }

	}

	function smith(player, count, ticks) {

        document.getElementById("smithProg").value = count

        count += 1/ticks

        if (count < 1) {
            window.setTimeout(function(){smith(player, count, ticks);}, player.gloves.gatheringRate/ticks)
        } else {
            player.gloves.activate(player);
            smith(player, 0, ticks);
            updateGui(player);
        }

    }


	function updateGui(player) {

		//Prints current pickaxe
		document.getElementById("pickaxeName").innerHTML = player.pickaxe.name;
		//Prints current smithing gloves
		document.getElementById("glovesName").innerHTML = player.gloves.name;





		//Prints ore list
		var oresList = ""
		for (ore in player.ores) {
			ammount = player.ores[ore]
			if (ammount === 0) {continue;} // doesn't prit ores you don't have
			oresList += ore + ": " + ammount + "<br>"
		}
		document.getElementById("oresList").innerHTML = oresList;

		//Prints bar list
		var barsList = ""
		for (bar in player.bars) {
			ammount = player.bars[bar]
			if (ammount === 0) {continue;} // doesn't prit bars you don't have
			barsList += bar + ": " + ammount + "<br>"
		}
		document.getElementById("barsList").innerHTML = barsList;


	}

	updateGui(player);

    mine(player, 0, 20);
    smith(player, 0, 20);

})();