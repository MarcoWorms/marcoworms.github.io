(function(){

	function getCos(angle) {
		var cos = Math.round(Math.cos(angle * Math.PI / 180) * 1000) / 1000;
		return cos;
	}

	function getSin(angle) {
		var sin = Math.round(Math.sin(angle * Math.PI / 180) * 1000) / 1000;
		return sin;
	}

	function Star(x, y, mass, angle, velocity) {
		
		this.x = x;
		this.y = y;
		this.m = mass;
		this.a = angle;
		this.v = velocity;

		this.vX = function() {		
			var vX = getCos(this.a) * this.v;	
			return Math.round(vX * 1000) / 1000;
		}

		this.vY = function() {
			var vY = getSin(this.a) * this.v;	
			return Math.round(vY * 1000) / 1000;;
		}

		this.move = function(deltaTime) {
			this.x += this.vX() * deltaTime;
			this.y += this.vY() * deltaTime;
			console.log(JSON.stringify(this));
		}

		this.draw = function(context) {
			context.fillStyle = white;
		}

	}

	document.addEventListener("DOMContentLoaded", function(event) { 
		getContext();
	});

	function getContext() {
		console.log("Initializing...");

		var canvas = document.getElementById("spaceCanvas");
		var context = canvas.getContext("2d");

		startSimulation(context);
	}




	function startSimulation(context) {
		console.log("Simulation Started")






	}




})();






