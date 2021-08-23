const chai = require('chai');
const expect = chai.expect;
const { move, incrementalMove, secondMove, firstMove, gameCounter } = require('../game/move');

describe('move function test', function () {

  it("move function exists", function () {
    expect(move).to.not.be.undefined;
  });

  it('Returns corner position 0 when empty board is passed in', function () {
    expect(move(['', '', '', '', '', '', '', '', ''])).to.equal(0);
  });

  it('Returns center position 4 when corner position 0 is passed in', function () {
    expect(move(['X', '', '', '', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when side position 1 is passed in', function () {
    expect(move(['', 'X', '', '', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 2 is passed in', function () {
    expect(move(['', '', 'X', '', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when side position 3 is passed in', function () {
    expect(move(['', '', '', 'X', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns corner position 0 when center position 4 is passed in', function () {
    expect(move(['', '', '', '', 'X', '', '', '', ''])).to.equal(0);
  });

  it('Returns center position 4 when side position 5 is passed in', function () {
    expect(move(['', '', '', '', '', 'X', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 6 is passed in', function () {
    expect(move(['', '', '', '', '', '', 'X', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when side position 7 is passed in', function () {
    expect(move(['', '', '', '', '', '', '', 'X', ''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 8 is passed in', function () {
    expect(move(['', '', '', '', '', '', '', '', 'X'])).to.equal(4);
  });

  it('Returns 3 when O player is in position 1', function () {
    expect(move(['X', 'O', '', '', '', '', '', '', ''])).to.equal(3);
  });

  it('Returns 3 when O player is in position 2', function () {
    expect(move(['X', '', 'O', '', '', '', '', '', ''])).to.equal(3);
  });

  it('Returns 1 when O player is in position 3', function () {
    expect(move(['X', '', '', 'O', '', '', '', '', ''])).to.equal(1);
  });

  it('Returns 1 when O player is in position 4', function () {
    expect(move(['X', '', '', '', 'O', '', '', '', ''])).to.equal(1);
  });

  it('Returns 4 when O player is in position 5', function () {
    expect(move(['X', '', '', '', '', 'O', '', '', ''])).to.equal(4);
  });

  it('Returns 1 when O player is in position 6', function () {
    expect(move(['X', '', '', '', '', '', 'O', '', ''])).to.equal(1);
  });

  it('Returns 2 when O player is in position 7', function () {
    expect(move(['X', '', '', '', '', '', '', 'O', ''])).to.equal(2);
  });

  it('Returns 2 when O player is in position 8', function () {
    expect(move(['X', '', '', '', '', '', '', '', 'O'])).to.equal(2);
  });
  //
  it('Returns 2 to block winning move', function () {
    expect(move(['X', 'X', '', '', 'O', '', '', '', ''])).to.equal(2);
  });

  it('Returns 0 to block winning move', function () {
    expect(move(['', 'X', 'X', '', 'O', '', '', '', ''])).to.equal(0);
  });

  it('Returns 3 to block winning move', function () {
    expect(move(['X', '', '', '', 'O', '', 'X', '', ''])).to.equal(3);
  });

  it('Returns 7 as optimal move', function () {
    expect(move(['X', '', '', '', 'O', 'X', '', '', ''])).to.equal(7);
  });

  it('Returns 5 as optimal move', function () {
    expect(move(['X', '', '', '', 'O', '', '', 'X', ''])).to.equal(5);
  });

  it('Returns 1 as optimal move', function () {
    expect(move(['X', '', '', '', 'O', '', '', '', 'X'])).to.equal(1);
  });

  it('Returns 2 as optimal move', function () {
    expect(move(['', 'X', '', 'X', 'O', '', '', '', ''])).to.equal(2);
  });

  it('Returns 0 as optimal move', function () {
    expect(move(['', 'X', '', '', 'O', 'X', '', '', ''])).to.equal(0);
  });

  it('Returns 5 as optimal move', function () {
    expect(move(['', 'X', '', '', 'O', '', 'X', '', ''])).to.equal(5);
  });

  it('Returns 0 as optimal move', function () {
    expect(move(['', 'X', '', '', 'O', '', '', 'X', ''])).to.equal(0);
  });

  it('Returns 3 as optimal move', function () {
    expect(move(['', 'X', '', '', 'O', '', '', '', 'X'])).to.equal(3);
  });

  it('Returns 7 as optimal move', function () {
    expect(move(['', '', 'X', 'X', 'O', '', '', '', ''])).to.equal(7);
  });

  it('Returns 1 as optimal move', function () {
    expect(move(['', '', 'X', '', 'O', '', 'X', '', ''])).to.equal(1);
  });

  it('Returns 3 as optimal move', function () {
    expect(move(['', '', 'X', '', 'O', '', '', 'X', ''])).to.equal(3);
  });

  it('Returns 0 as optimal move', function () {
    expect(move(['', '', '', 'X', 'O', 'X', '', '', ''])).to.equal(0);
  });

  it('Returns 0 as optimal move', function () {
    expect(move(['', '', '', 'X', 'O', '', '', 'X', ''])).to.equal(0);
  });

  it('Returns 1 as optimal move', function () {
    expect(move(['', '', '', 'X', 'O', '', '', '', 'X'])).to.equal(1);
  });

  it('Returns 2 as optimal move', function () {
    expect(move(['O', '', '', '', 'X', '', '', '', 'X'])).to.equal(2);
  });

  it('Returns 1 as optimal move', function () {
    expect(move(['', '', '', '', 'O', 'X', 'X', '', ''])).to.equal(1);
  });

  it('Returns 2 as optimal move', function () {
    expect(move(['', '', '', '', 'O', 'X', '', 'X', ''])).to.equal(2);
  });

  it('Returns 3 as last move', function () {
    expect(move(['X', 'O', 'X', '', 'O', 'O', 'O', 'X', 'X'])).to.equal(3);
  });

});
describe('firstMove function test', function () {

  it("firstMove function exists", function () {
    expect(firstMove).to.not.be.undefined;
  });

  it('Returns corner position 0 when empty board is passed in', function () {
    expect(firstMove(['', '', '', '', '', '', '', '', ''])).to.equal(0);
  });

  it('Returns center position 4 when corner position 0 is passed in', function () {
    expect(firstMove(['X', '', '', '', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when side position 1 is passed in', function () {
    expect(firstMove(['', 'X', '', '', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 2 is passed in', function () {
    expect(firstMove(['', '', 'X', '', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when side position 3 is passed in', function () {
    expect(firstMove(['', '', '', 'X', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns corner position 0 when center position 4 is passed in', function () {
    expect(firstMove(['', '', '', '', 'X', '', '', '', ''])).to.equal(0);
  });

  it('Returns center position 4 when side position 5 is passed in', function () {
    expect(firstMove(['', '', '', '', '', 'X', '', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 6 is passed in', function () {
    expect(firstMove(['', '', '', '', '', '', 'X', '', ''])).to.equal(4);
  });

  it('Returns center position 4 when side position 7 is passed in', function () {
    expect(firstMove(['', '', '', '', '', '', '', 'X', ''])).to.equal(4);
  });

  it('Returns center position 4 when corner position 8 is passed in', function () {
    expect(firstMove(['', '', '', '', '', '', '', '', 'X'])).to.equal(4);
  });

});

describe('secondMove function test', function () {

  it("secondMove function exists", function () {
    expect(secondMove).to.not.be.undefined;
  });

  it('Returns 3 when O player is in position 1', function () {
    expect(secondMove(['X', 'O', '', '', '', '', '', '', ''])).to.equal(3);
  });

  it('Returns 3 when O player is in position 2', function () {
    expect(secondMove(['X', '', 'O', '', '', '', '', '', ''])).to.equal(3);
  });

  it('Returns 1 when O player is in position 3', function () {
    expect(secondMove(['X', '', '', 'O', '', '', '', '', ''])).to.equal(1);
  });

  it('Returns 1 when O player is in position 4', function () {
    expect(secondMove(['X', '', '', '', 'O', '', '', '', ''])).to.equal(1);
  });

  it('Returns 4 when O player is in position 5', function () {
    expect(secondMove(['X', '', '', '', '', 'O', '', '', ''])).to.equal(4);
  });

  it('Returns 1 when O player is in position 6', function () {
    expect(secondMove(['X', '', '', '', '', '', 'O', '', ''])).to.equal(1);
  });

  it('Returns 2 when O player is in position 7', function () {
    expect(secondMove(['X', '', '', '', '', '', '', 'O', ''])).to.equal(2);
  });

  it('Returns 2 when O player is in position 8', function () {
    expect(secondMove(['X', '', '', '', '', '', '', '', 'O'])).to.equal(2);
  });

});

describe('incrementalMove function test', function () {

  it("incrementalMove function exists", function () {
    expect(incrementalMove).to.not.be.undefined;
  });

  it('Returns 2 to block winning move', function () {
    expect(incrementalMove(['X', 'X', '', '', 'O', '', '', '', ''])).to.equal(2);
  });

  it('Returns 0 to block winning move', function () {
    expect(incrementalMove(['', 'X', 'X', '', 'O', '', '', '', ''])).to.equal(0);
  });

  it('Returns 3 to block winning move', function () {
    expect(incrementalMove(['X', '', '', '', 'O', '', 'X', '', ''])).to.equal(3);
  });

  it('Returns 7 as optimal move', function () {
    expect(incrementalMove(['X', '', '', '', 'O', 'X', '', '', ''])).to.equal(7);
  });

  it('Returns 5 as optimal move', function () {
    expect(incrementalMove(['X', '', '', '', 'O', '', '', 'X', ''])).to.equal(5);
  });

  it('Returns 1 as optimal move', function () {
    expect(incrementalMove(['X', '', '', '', 'O', '', '', '', 'X'])).to.equal(1);
  });

  it('Returns 2 as optimal move', function () {
    expect(incrementalMove(['', 'X', '', 'X', 'O', '', '', '', ''])).to.equal(2);
  });

  it('Returns 0 as optimal move', function () {
    expect(incrementalMove(['', 'X', '', '', 'O', 'X', '', '', ''])).to.equal(0);
  });

  it('Returns 5 as optimal move', function () {
    expect(incrementalMove(['', 'X', '', '', 'O', '', 'X', '', ''])).to.equal(5);
  });

  it('Returns 0 as optimal move', function () {
    expect(incrementalMove(['', 'X', '', '', 'O', '', '', 'X', ''])).to.equal(0);
  });

  it('Returns 3 as optimal move', function () {
    expect(incrementalMove(['', 'X', '', '', 'O', '', '', '', 'X'])).to.equal(3);
  });

  it('Returns 7 as optimal move', function () {
    expect(incrementalMove(['', '', 'X', 'X', 'O', '', '', '', ''])).to.equal(7);
  });

  it('Returns 1 as optimal move', function () {
    expect(incrementalMove(['', '', 'X', '', 'O', '', 'X', '', ''])).to.equal(1);
  });

  it('Returns 3 as optimal move', function () {
    expect(incrementalMove(['', '', 'X', '', 'O', '', '', 'X', ''])).to.equal(3);
  });

  it('Returns 0 as optimal move', function () {
    expect(incrementalMove(['', '', '', 'X', 'O', 'X', '', '', ''])).to.equal(0);
  });

  it('Returns 0 as optimal move', function () {
    expect(incrementalMove(['', '', '', 'X', 'O', '', '', 'X', ''])).to.equal(0);
  });

  it('Returns 1 as optimal move', function () {
    expect(incrementalMove(['', '', '', 'X', 'O', '', '', '', 'X'])).to.equal(1);
  });

  it('Returns 2 as optimal move', function () {
    expect(incrementalMove(['O', '', '', '', 'X', '', '', '', 'X'])).to.equal(2);
  });

  it('Returns 1 as optimal move', function () {
    expect(incrementalMove(['', '', '', '', 'O', 'X', 'X', '', ''])).to.equal(1);
  });

  it('Returns 2 as optimal move', function () {
    expect(incrementalMove(['', '', '', '', 'O', 'X', '', 'X', ''])).to.equal(2);
  });

  //
  it('Returns 4 Returns 4 as optimal move', function () {
    expect(incrementalMove(['X', 'O', '', 'X', '', '', 'O', '', ''])).to.equal(4);
  });

  it('Returns 4 as optimal move', function () {
    expect(incrementalMove(['X', '', 'O', 'X', '', '', 'O', '', ''])).to.equal(4);
  });

  it('Returns 4 as optimal move', function () {
    expect(incrementalMove(['X', 'X', 'O', 'O', '', '', '', '', ''])).to.equal(4);
  });

  it('Returns 6 as optimal move', function () {
    expect(incrementalMove(['X', 'X', 'O', '', 'O', '', '', '', ''])).to.equal(6);
  });

  it('Returns 2 as optimal move', function () {
    expect(incrementalMove(['X', '', '', '', 'X', 'O', '', '', 'O'])).to.equal(2);
  });

  it('Returns 4 as optimal move', function () {
    expect(incrementalMove(['X', 'X', 'O', '', '', '', 'O', '', ''])).to.equal(4);
  });

  it('Returns 4 as optimal move', function () {
    expect(incrementalMove(['X', 'O', 'X', '', '', '', '', 'O', ''])).to.equal(4);
  });

  it('Returns 6 as optimal move', function () {
    expect(incrementalMove(['X', 'O', 'X', '', '', '', '', '', 'O'])).to.equal(6);
  });

  it('Returns 3 as last move', function () {
    expect(incrementalMove(['X', 'O', 'X', '', 'O', 'O', 'O', 'X', 'X'])).to.equal(3);
  });


});

describe('gameCounter function test', function () {

  it("gameCounter function exists", function () {
    expect(gameCounter).to.not.be.undefined;
  });

  it('Empty board returns 0', function () {
    expect(gameCounter(['', '', '', '', '', '', '', '', ''])).to.equal(0);
  });

  it('Board with 2 moves returns 2', function () {
    expect(gameCounter(['X', '', '', '', 'O', '', '', '', ''])).to.equal(2);
  });

  it('Board with 1 move returns 1', function () {
    expect(gameCounter(['X', '', '', '', '', '', '', '', ''])).to.equal(1);
  });

  it('Board with 8 moves returns', function () {
    expect(gameCounter(['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', ''])).to.equal(8);
  });

});