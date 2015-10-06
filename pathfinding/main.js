var ctx = null;
var spritesheet = null;
var spritesheetLoaded = false;

var world = [[]];

var worldWidth = 16;
var worldHeight = 16;

var tileWidth = 32;
var tileHeight = 32;

var pathStart = [worldWidth, worldHeight];
var pathEnd = [0, 0];
var currentPath = [];

function onload() {
    console.log("Page loaded.");
    canvas = document.getElementById("gameCanvas");
    canvas.width =  worldWidth * tileWidth;
    canvas.height =  worldHeight * tileHeight;
    //canvas.addEventListener("click", canvasClick, false);
    ctx = canvas.getContext("2d");
    spritesheet = new Image();
    spritesheet.src = "spritesheet.png";
    spritesheet.onload = loaded;
}

function loaded() {
    console.log("Spritesheet loaded.");
    spritesheetLoaded = true;
    createWorld();
}

function createWorld() {

}