// const { board } = require('./tic-tac-toe')
// is-valid.js
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const symbols = [ 'x', 'o', null ]

function isValidBoard(board) {
  if (
    board.length === 3
    && board.map() 
    && board[0].length === 3 
    && board[1].length === 3
    && board[2].length === 3
    ) {
    return true
  }
  else {
    return false
  }
}

function check(board) {
  board.map(boardRow => boardRow.every((currentElement, symbols) =>  ))
}

module.exports = {isValidBoard}