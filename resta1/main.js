'use strict'

const ZERO_TO_80 = Array(81).fill(0).map((el, index) => {
  return index
})

function translate_array (_array, roseta, prop) {
  var translated_array = _array.map(function (char) {
    var translation = roseta[char][prop]
    return translation
  })
  return translated_array
}

function get_array_element_by_xy (_array, row_width, x, y) {
  var field_index = (y * row_width) + x
  return _array[field_index]
}

function try_move (selected_piece_index, target_field_index) {
  var selected_piece_x = selected_piece_index % 9
  var selected_piece_y = Math.floor(selected_piece_index / 9)

  var target_field_x = target_field_index % 9
  var target_field_y = Math.floor(target_field_index / 9)
  var target_field = game.board.get_field_xy(target_field_x, target_field_y)

  var middle_piece_x = (selected_piece_x + target_field_x) / 2
  var middle_piece_y = (selected_piece_y + target_field_y) / 2
  var middle_piece = game.board.get_field_xy(middle_piece_x, middle_piece_y)

  function is_distance_valid () {
    var distance_x = Math.abs(Math.abs(selected_piece_x) - Math.abs(target_field_x))
    var distance_y = Math.abs(Math.abs(selected_piece_y) - Math.abs(target_field_y))

    var is_in_range = () => (distance_x === 2 || distance_y === 2) ? true : false
    var is_not_diagonal = () => (distance_x === 0 || distance_y === 0) ? true : false

    if (is_in_range() && is_not_diagonal()) {
      return true
    } else {
      return false
    }
  }

  function has_piece_between_fields () {
    return (middle_piece.state === 'piece') ? true : false
  }

  function target_field_is_empty () {
    return (target_field.state === 'empty') ? true : false
  }

  function lift_move_and_eat () {
    game.board.set_state(selected_piece_index, '-') // lift
    game.board.set_state(target_field_index, 'p') // move
    game.board.set_state_xy(middle_piece_x, middle_piece_y, '-') // eat
  }

  if (is_distance_valid() && has_piece_between_fields() && target_field_is_empty()) {
    lift_move_and_eat()
  }
}

function triggerClick (x, y) {
  var clicked_index = (y * 9) + x
  var clicked_field = game.board.get_field_xy(x, y)
  var selected_piece = game.board.selected_piece
  if (selected_piece === null) {
    if (clicked_field.state === 'piece') {
      game.board.selected_piece = clicked_index
    }
  } else {
    try_move(selected_piece, clicked_index)
    game.board.selected_piece = null
  }

  paint_dom_board(game.board)
  recount_pieces()
}

function make_dom_board (board_id, cell_size, cell_border_width) {
  var dom_board = document.getElementById(board_id)
  dom_board.style.width = (9 * (cell_size + cell_border_width * 2) - 5) + 'px'

  var dom_element = document.createElement('DIV')
  dom_element.className += 'field'
  dom_element.style.width = (cell_size - cell_border_width * 2) + 'px'
  dom_element.style.height = (cell_size - cell_border_width * 2) + 'px'
  dom_element.style.borderWidth = cell_border_width + 'px'

  ZERO_TO_80.forEach((element_index) => {
    let element_copy = dom_element.cloneNode(true)
    element_copy.id = 'field' + element_index
    element_copy.x = element_index % 9
    element_copy.y = Math.floor(element_index / 9)
    element_copy.onclick = function (element) {
      triggerClick(this.x, this.y)
    }
    dom_board.appendChild(element_copy)
  })
}

function paint_dom_board (board) {
  board.css_colors().forEach((css_color, element_index) => {
    var element_id = 'field' + element_index
    document.getElementById(element_id).style.backgroundColor = css_color
    document.getElementById(element_id).style.borderColor = game.board.piece_border_color
  })

  if (board.selected_piece !== null) {
    var selected_id = 'field' + board.selected_piece
    document.getElementById(selected_id).style.borderColor = game.board.selected_piece_color
  }
}

const game = {}

game.board = (function () {
  var initial_state = [
      '|', '|', '|', 'p', 'p', 'p', '|', '|', '|'
    , '|', '|', '|', 'p', 'p', 'p', '|', '|', '|'
    , '|', '|', '|', 'p', 'p', 'p', '|', '|', '|'
    , 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'
    , 'p', 'p', 'p', 'p', '-', 'p', 'p', 'p', 'p'
    , 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'
    , '|', '|', '|', 'p', 'p', 'p', '|', '|', '|'
    , '|', '|', '|', 'p', 'p', 'p', '|', '|', '|'
    , '|', '|', '|', 'p', 'p', 'p', '|', '|', '|'
  ]
  var state = initial_state.slice()

  var roseta = {
    '|': {
      state: 'disabled',
      css_color: 'black'
    },
    'p': {
      state: 'piece',
      css_color: 'grey'
    },
    '-': {
      state: 'empty',
      css_color: 'white'
    }
  }

  var board = {
    selected_piece: null,
    selected_piece_color: 'white',
    piece_border_color: '#282828',
    state: () => state.slice(),
    states: () => translate_array(state, roseta, 'state'),
    css_colors: () => translate_array(state, roseta, 'css_color'),
    get_field_xy: (x, y) => {
      return roseta[get_array_element_by_xy(state, 9, x, y)]
    },
    get_field_xy: (x, y) => {
      return roseta[get_array_element_by_xy(state, 9, x, y)]
    },
    set_state: (index, new_state) => {
      state[index] = new_state
    },
    set_state_xy: (x, y, new_state) => {
      let index = (y * 9) + x
      state[index] = new_state
    },
    restart: () => {
      board.selected_piece = null
      state = initial_state.slice()
    }
  }

  return board
}())

window.onload = function () {
  make_dom_board('board', 64, 3)
  paint_dom_board(game.board)
  recount_pieces()
}

function restart () {
  game.board.restart()
  paint_dom_board(game.board)
  recount_pieces()
}

function recount_pieces () {
  var pieces_count = 0

  game.board.state().forEach((field) => { 
    if (field === 'p') {
      pieces_count += 1
    }
  })

  document.getElementById('counter').innerHTML = pieces_count
}