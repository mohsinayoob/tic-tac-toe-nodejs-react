import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gameBoard: ['', '', '', '', '', '', '', '', ''],
      gameCounter: 0,
      gameStatus: 'In Progress',
      player: 1
    }
  }

  addToBoard(index) {
    const { gameBoard, gameCounter } = this.state
    gameBoard[index] = this.playerTurn(gameCounter);
    this.setState({ gameBoard })
  }

  computerMove() {
    const { gameCounter, gameBoard } = this.state
    fetch('/api/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ board: gameBoard })
    }).then(response => response.json()).then((obj) => {
      var index = obj.nextMove;
      this.addToBoard(index);
      this.setState({
        gameCounter: gameCounter + 1
      })
      this.winner();
    }).catch(error => {
      console.log(error.message)
    });
  }

  winner = () => {
    const { gameBoard } = this.state
    fetch('/api/winner', {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify({ board: gameBoard })
    }).then(response => response.json()).then((obj) => {
      const gameStatusRes = obj.winner;
      if (gameStatusRes !== 'In Progress') {
        this.setState({ gameStatus: gameStatusRes })
      }
    }).catch(error => {
      console.log(error.message)
    });
  }

  newGameClick = () => {
    this.setState({
      gameBoard: ['', '', '', '', '', '', '', '', ''],
      gameCounter: 0,
      gameStatus: 'In Progress',
      player: 1
    })

    return 'new game';
  }

  computerPlayerClick = (player) => {
    this.setState({ player })
    if (!player) this.computerMove();
  }
  playerTurn(count) {
    return count % 2 === 0 ? 'X' : 'O'
  }

  cardClick(index) {
    const { gameCounter, gameBoard, gameStatus } = this.state
    if (gameBoard[index] !== '') return alert("Invalid CLick")
    if (gameStatus === 'In Progress') {
      this.addToBoard(parseInt(index));
      this.setState({
        gameCounter: gameCounter + 1
      })

      fetch('/api/winner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ board: gameBoard })
      }).then(response => response.json()).then((obj) => {
        const gameStatusRes = obj.winner;
        if (gameStatusRes !== 'In Progress') {
          this.setState({ gameStatus: gameStatusRes })
        } else {
          this.computerMove();
        }
      }).catch(error => {
        console.log(error.message)
      });
    }
  }

  render() {
    return (
      <div className="tall-container-wrapper">
        <div className="gameplay"><h3>To start game click on board to play as 'X' or click on 'Player O' to go second.</h3></div>

        <table className="play_as">
          <tr>
            <td className="player" onClick={() => this.computerPlayerClick(1)} style={{ background: this.state.player ? "lightblue" : "white" }}><h2>Player X</h2></td>
            <td className="player" onClick={() => this.computerPlayerClick(0)} style={{ background: !this.state.player ? "lightblue" : "white" }}><h2>Player O</h2></td>
          </tr>
        </table>

        <table className="board">
          <tbody>
            {['', '', ''].map((value, index) => {
              return (<tr>
                <td className="square" id={index * 3} onClick={() => this.cardClick(index * 3)}><h2>{this.state.gameBoard[index * 3]}</h2></td>
                <td className="square" id={index * 3 + 1} onClick={() => this.cardClick(index * 3 + 1)}><h2>{this.state.gameBoard[index * 3 + 1]}</h2></td>
                <td className="square" id={index * 3 + 2} onClick={() => this.cardClick(index * 3 + 2)}><h2>{this.state.gameBoard[index * 3 + 2]}</h2></td>
              </tr>)
            })}
          </tbody>
        </table>

        <div className="outcome"><h2>{this.state.gameStatus}</h2></div>

        <div><button onClick={this.newGameClick}>New Game</button></div>
      </div>
    );
  }
}
export default App;
