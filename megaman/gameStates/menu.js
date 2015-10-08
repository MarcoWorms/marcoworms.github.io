var menuState = {
    create: function() {

    	var bg = game.add.sprite(0,0,"menuBg");

    	var button1 = game.add.button(500, 200, "button1", button1Click, this, 1, 2, 0)
    	var button2 = game.add.button(500, 400, "button2", button2Click, this, 1, 2, 0)

    	function button1Click() {
    		game.state.start("play");
    	}

    	function button2Click() {
    		game.state.start("play");
    	}
    }
}