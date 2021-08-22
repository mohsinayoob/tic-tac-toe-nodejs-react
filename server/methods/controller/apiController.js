const { winner } = require('../game/winner');
const { move } = require('../game/move');

function gameWinner(req, res) {
  console.log(req.body.board)
  let input = req.body.board;
  let output = winner(input);
  res.json({ winner: output });
}

function nextMove(req, res) {
  let input = req.body.board;
  let output = move(input);
  res.json({ nextMove: output });
}

module.exports = {
  gameWinner,
  nextMove
};