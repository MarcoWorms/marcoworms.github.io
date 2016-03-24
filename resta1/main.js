const initialField = [
	0,0,0,1,1,1,0,0,0,
	0,0,0,1,1,1,0,0,0,
	0,0,0,1,1,1,0,0,0,
	1,1,1,1,1,1,1,1,1,
	1,1,1,1,2,1,1,1,1,
	1,1,1,1,1,1,1,1,1,
	0,0,0,1,1,1,0,0,0,
	0,0,0,1,1,1,0,0,0,
	0,0,0,1,1,1,0,0,0
]

const fieldTypes = {
	0: {
		type: 'inactive',
		color: 'gray'
	},
	1: {
		type: 'piece',
		color: 'red'
	},
	2: {
		type: 'empty',
		color: 'white'
	}
}

generateBoard = (fieldArray) => {
	var pos = {
		x:0,
		y:0
	}
	return fieldArray.map((fieldType) => {
		var field = Object.assign({}, fieldTypes[fieldType])
		
		field.x = pos.x
		field.y = pos.y
		pos.x += 1
		if (pos.x >= 9) {
			pos.x = 0
			pos.y += 1
		}

		field.selected = false

		field.onclick = () => {
			click(field.y * 9 + field.x)
		}

		field.makeAPiece = () => {
			Object.assign(field, fieldTypes[1])
		}

		field.empty = () => {
			Object.assign(field, fieldTypes[2])
		}

		return field
	})
}

function processClick (gameBoard, elementIndex) {

	var field = gameBoard[elementIndex]

	if (pieceSelected === null) {
		pieceSelected = elementIndex
		field.selected = true
	} else {
		var middlePieceType = getTypeBetween(gameBoard[pieceSelected], field)
		if (field.type === 'empty' && middlePieceType === 'piece') {
			field.makeAPiece()
			gameBoard[pieceSelected].empty()
			gameBoard[pieceSelected].selected = false
			pieceSelected = null
		} else {
			gameBoard[pieceSelected].selected = false
			pieceSelected = null
		}
	}

	drawField(gameBoard)
}

function getTypeBetween (selectedField, targetField) {

	var middleFieldX = (selectedField.x + targetField.x) / 2  
	var middleFieldY = (selectedField.y + targetField.y) / 2

	var middleIndex = (middleFieldY * 9) + middleFieldX

	return gameBoard[middleIndex].type
}

drawField = (board) => {
	document.getElementsByClassName('board')[0].innerHTML = ''
	board.forEach((field) => {
		var domElement = document.createElement('DIV')
		domElement.className += 'field'
		domElement.style.backgroundColor = field.color
		if (field.selected) {
			domElement.style.backgroundColor = 'green'
		}
		domElement.onclick = field.onclick
		document.getElementsByClassName('board')[0].appendChild(domElement)
	})
}

var gameBoard = generateBoard(initialField)

drawField(gameBoard)

var pieceSelected = null

function click (elementIndex) {
	processClick(gameBoard, elementIndex)
	drawField(gameBoard)
}