
/*
winner function accepts board array as a paramenter and determines if the game has a winner.
Returns 'Draw', 'In Progress', 'X wins', 'O wins' 
*/

function winner(board) {
  if (!winningCombo(board) && board.indexOf('') > -1) return 'In Progress';
  if (!winningCombo(board) && board.indexOf('') === -1) return 'Draw';
  if (winningCombo(board)) return board[winningCombo(board)[0]] + ' Wins';
}


/*
winningCombo function accepts an array as a parameter and returns 'undefined' if there is no winning combination.
If there is a winning combination, the function will return an array containing the winning combination
*/

function winningCombo(board) {
  if (board === undefined) return undefined
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  var winner = winningCombinations.find(combo =>
    board[combo[0]] !== '' &&
    board[combo[0]] === board[combo[1]] &&
    board[combo[1]] === board[combo[2]]
  );

  return winner
}

module.exports = {
  winner,
  winningCombo
};