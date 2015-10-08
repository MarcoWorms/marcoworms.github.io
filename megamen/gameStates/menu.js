var menuState = {
    create: function() {

    	var button1 = game.add.button(400, 250, "button1", button1Click, this, 1, 2, 0)
    	var button2 = game.add.button(400, 350, "button2", button2Click, this, 1, 2, 0)

    	function button1Click() {
    		game.state.start("play");
    	}

    	function button2Click() {
    		game.state.start("play");
    	}
    }
}