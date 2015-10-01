(function(){

    game = this;

    var craftingItems = {
        "BronzePick" : {
            "instance" : new itemFactory.BronzePickaxe(),
            "active" : true,
            "clickable" : false,
            "crafted" : false,
            "recipe" : {
                "Bronze" : 2
            }
        },
        "BronzeGloves" : {
            "instance" : new itemFactory.BronzeGloves(),
            "active" : true,
            "clickable" : false,
            "crafted" : false,
            "recipe" : {
                "Bronze" : 2
            }
        },
        "IronPick" : {
            "instance" : new itemFactory.IronPickaxe(),
            "active" : false,
            "clickable" : false,
            "crafted" : false,
            "recipe" : {
                "Iron" : 10
            }
        }
    }

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
			"Bronze" : 2,
			"Iron" : 0,
			"Steel" : 0,
			"Mithril" : 0,
			"Adamant" : 0,
			"Runite" : 0

		},
		"pickaxe" : new itemFactory.BadPickaxe(),
		"gloves" : new itemFactory.BadGloves()
	}

    function mine(count, ticks) {

        document.getElementById("mineProg").value = count;

        count += 1/ticks

        if (count < 1) {
            window.setTimeout(function(){mine(count, ticks);}, player.pickaxe.gatheringRate/ticks)
        } else {
            player.pickaxe.activate(player);
            mine(0, ticks);
            updateGui();

        }

	}

	function smith(count, ticks) {

        document.getElementById("smithProg").value = count

        count += 1/ticks

        if (count < 1) {
            window.setTimeout(function(){smith(count, ticks);}, player.gloves.gatheringRate/ticks)
        } else {
            player.gloves.activate(player);
            smith(0, ticks);
            updateGui();
        }

    }


	function updateGui() {

		//Prints current pickaxe
		document.getElementById("pickaxeName").innerHTML = player.pickaxe.name;
		//Prints current smithing gloves
		document.getElementById("glovesName").innerHTML = player.gloves.name;



        var craftingList = ""
        document.getElementById("craftingList").innerHTML = craftingList;
        for (item in craftingItems) {
            if (craftingItems[item]["crafted"]) {
                continue;
            };
            var recipe = craftingItems[item]["recipe"];
            var canMake = true;
            for (material in recipe) {
                var barAmmount = player["bars"][material];
                var recipeAmmount = recipe[material];

                if (barAmmount < recipeAmmount || barAmmount === undefined) {
                    craftingItems[item]["clickable"] = false
                } else {
                    craftingItems[item]["clickable"] = true
                    craftingItems[item]["active"] = true;
                }
            }
            if (craftingItems[item]["active"]) {
                var id = item;
                var name = craftingItems[item]["instance"].name;
                var recipe = JSON.stringify(craftingItems[item]["recipe"])

                craftingList += "<b>" + name + "</b> -\
                                <span>" + recipe + "</span>\
                                <button id='" + id + "'>Craft</button><br>";

            }
        }
        document.getElementById("craftingList").innerHTML = craftingList;

        for (item in craftingItems) {
            if (craftingItems[item]["crafted"]) {
                continue;
            };
            if (craftingItems[item]["clickable"] && craftingItems[item]["active"]) {
                var id = item;
                document.getElementById(id).addEventListener("click", function(e) {
                    var item = e.currentTarget.id;
                    player[craftingItems[item]["instance"].itemType] = craftingItems[item]["instance"];

                    for (material in craftingItems[item]["recipe"]) {
                        player["bars"][material] -= craftingItems[item]["recipe"][material];
                        console.log(player["bars"][material])
                    }

                    craftingItems[item]["crafted"] = true

                    updateGui();
                });
            }
        }


		//Prints ore list
		var oresList = ""
		for (ore in player.ores) {
			var ammount = player.ores[ore]
			if (ammount === 0) {continue;} // doesn't print ores you don't have
			oresList += ore + ": " + ammount + "<br>"
		}
		document.getElementById("oresList").innerHTML = oresList;

		//Prints bar list
		var barsList = ""
		for (bar in player.bars) {
			var ammount = player.bars[bar]
			if (ammount === 0) {continue;} // doesn't print bars you don't have
			barsList += bar + ": " + ammount + "<br>"
		}
		document.getElementById("barsList").innerHTML = barsList;


	}

	updateGui(player);

    mine(0, 40);
    smith(0, 40);

})();