const winningMove = require('./winningMove');
/*
move function accepts array as a parameter and returns index position for the next move.
*/

function gameCounter(board) {
  let counter = 0

  board.forEach(element => {
    if (element !== '') counter++
  });

  return counter;
}

function firstMove(board) {
  return board.indexOf('X') === 4 || board.indexOf('X') === -1 ? 0 : 4
}

function secondMove(board) {

  switch (board.indexOf('O')) {
    case 1:
    case 2:
      return 3;
      break;
    case 3:
    case 4:
    case 6:
      return 1;
      break;
    case 5:
      return 4;
      break;
    case 7:
    case 8:
      return 2;
      break;
  }

}

function incrementalMove(board) {

  if (typeof winningMove(board) === 'number') {
    return winningMove(board);
  }

  switch (gameCounter(board)) {
    case 3:
      if (board[0] === 'X' && board[5] === 'X') return 7;
      if (board[0] === 'X' && board[7] === 'X') return 5;
      if (board[0] === 'X' && board[8] === 'X') return 1;
      if (board[1] === 'X' && board[3] === 'X') return 2;
      if (board[1] === 'X' && board[5] === 'X') return 0;
      if (board[1] === 'X' && board[6] === 'X') return 5;
      if (board[1] === 'X' && board[7] === 'X') return 0;
      if (board[1] === 'X' && board[8] === 'X') return 3;
      if (board[2] === 'X' && board[3] === 'X') return 7;
      if (board[2] === 'X' && board[6] === 'X') return 1;
      if (board[2] === 'X' && board[7] === 'X') return 3;
      if (board[3] === 'X' && board[5] === 'X') return 0;
      if (board[3] === 'X' && board[7] === 'X') return 0;
      if (board[3] === 'X' && board[8] === 'X') return 1;
      if (board[4] === 'X' && board[8] === 'X') return 2;
      if (board[5] === 'X' && board[6] === 'X') return 1;
      if (board[5] === 'X' && board[7] === 'X') return 2;
      break;
    case 4:
      if (board[1] === 'O' && board[6] === 'O') return 4;
      if (board[2] === 'O' && board[3] === 'O') return 4;
      if (board[1] === 'O' && board[8] === 'O') return 6;
      break;
    default:
      return board.indexOf('');
  }

}

function move(board) {
  switch (gameCounter(board)) {
    case 0:
    case 1:
      return firstMove(board);
      break;
    case 2:
      return secondMove(board);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return incrementalMove(board);
      break;
  }

}

module.exports = {
  move,
  firstMove,
  secondMove,
  incrementalMove,
  gameCounter
};