'use strict';

class AuxiliarFunctions {
  generateEmptyField(char) {

    //needs es6 implementation when chrome decides to add optional params
    if (char === undefined) {
      char = '&nbsp'
    }

    let field = [];

    for (let i = 0; i < 30; i += 1) {
      let field_rows = [];
      for (let k = 0; k < 66; k += 1) {
        field_rows.push([char]);
      }
      field.push(field_rows);
    }

    return field;
  }

  print(field, text, fieldX, fieldY) {
    for (var i = 0; i < text.length; i++) {
      field[fieldY][fieldX + i] = text[i]
    };
    return field
  }


  loadSprite(fileName, callback) {

    let loadedFileAsText = '';
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){

      if(xmlhttp.status == 200 && xmlhttp.readyState == 4){

        loadedFileAsText = xmlhttp.responseText;

        let textLines = loadedFileAsText.split("\n")
        let spriteAsArray = []

        textLines.forEach(line => {
            let spriteLineAsArray = []
            for (let i = 0 ; i < line.length; i--) {
                spriteLineAsArray.push(line[i])
            };
            spriteAsArray.push(spriteLineAsArray)
        })

        callback(spriteAsArray)
      }
    };
    xmlhttp.open("GET", fileName);
    xmlhttp.send();

  }

}

class Engine {

  constructor(divId) {
    this.auxiliarFunctions = new AuxiliarFunctions();

    // injects the game on the div provided by the user
    let div = document.getElementById(divId);
    div.innerHTML = '<p id="asciiContainer"></p>';
    this.asciiContainer = document.getElementById('asciiContainer');
    this.field = this.auxiliarFunctions.generateEmptyField();
    this.lastDisplayHTML = '';
  }

  start(fps) {
    this.timeLastLoop = Date.now()
    this.fps = fps;
    this.init();
    this.loop();
  }

  loop() {
    let timeNow = Date.now()
    let deltaTime = (timeNow - this.timeLastLoop) / 1000
    this.timeLastLoop = timeNow

    this.update(deltaTime);
    this.draw();
    this.drawFieldArray(this.field);

    window.setTimeout(this.loop.bind(this), 1000/this.fps);
  }

  init() {
    // initialization logic, overrided on Game
  }

  update() {
    // game logic, overrided on Game
  }

  draw() {
    // draw logic, overrided on Game
  }

  drawFieldArray(field) {

    let displayField = [];
    field.forEach((row, rowIndex) => {
      displayField.push([]);
      row.forEach((cell, columnIndex) => {
        displayField[rowIndex].push('<span style="color:'+cell[1]+'" id="'+'x'+columnIndex+'y'+rowIndex+'">'+cell[0]+'</span>');
      });
    });

    let displayHTML = '';
    displayField.forEach((row) => {
      displayHTML += '<span class="row">' + row.join('') + '<BR></span>';
    });

    // only draws if the field has changed
    if (this.lastDisplayHTML !== displayHTML) {
      this.asciiContainer.innerHTML = displayHTML;
    }

    this.lastDisplayHTML = displayHTML;
  }

}

class GameObject {
  constructor(x, y, spriteFile) {
    this.name = name;
    this.x = x;
    this.y = y;
  // needs fix //  this.sprite = spriteFile ? loadSprite(spriteFile) : [];
  }

  // loadSprite(spriteFile) {

  // }

  onclick() {

  }

  draw(field) {

    if (this.sprite === undefined) {
        return
    }

    let width = this.sprite[0].length;
    let height = this.sprite.length;
    let roundX = Math.floor(this.x);
    let roundY = Math.floor(this.y);

    field.forEach((row, rowIndex) => {
      if (roundY <= rowIndex && rowIndex < roundY + height) {
        row.forEach((cell, columnIndex) => {
          if (roundX <= columnIndex && columnIndex < roundX + width) {
            field[rowIndex][columnIndex] = this.sprite[rowIndex - roundY][columnIndex - roundX];
          }
        });
      }
    });

    return field;
  }
}

class Game extends Engine {

  constructor(divId) {
    super(divId);
  }

  init() {
    this.player = new GameObject(3, 3);
    this.player.sprite = [[['/',"red"], ['-',"red"], ['\\',"red"]],
                          [['|',"red"], ['X',"green"], ['|',"red"]],
                          [['\\',"red"], ['-',"red"], ['/',"red"]]];
    this.player2 = new GameObject(10, 10);

    this.auxiliarFunctions.loadSprite("tieshooter-sprite-test.txt", function(spriteAsArray) {
        this.player2.sprite = spriteAsArray
    })
  }

  update(deltaTime) {
    this.player.x += 3 * deltaTime;
    this.player.y += 1 * deltaTime;
  }

  draw() {
    this.field = this.auxiliarFunctions.generateEmptyField();
    this.field = this.player.draw(this.field);
    this.field = this.player2.draw(this.field);
    this.field = this.auxiliarFunctions.print(this.field, "ola", 10, 20)
  }
}

var game = new Game('gameDiv');
game.start(12);

