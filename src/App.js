import './App.css';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div class="tall-container-wrapper">
        <div class="gameplay"><h3>To start game click on board to play as 'X' or click on 'Player O' to go second.</h3></div>

        <table class="play_as">
          <tr>
            <td class="player" id="X"><h2>Player X</h2></td>
            <td class="player" id="O"><h2>Player O</h2></td>
          </tr>
        </table>

        <table class="board">
          <tr>
            <td class="square" id="0" ><h2></h2></td>
            <td class="square" id="1"><h2></h2></td>
            <td class="square" id="2"><h2></h2></td>
          </tr>
          <tr>
            <td class="square" id="3"><h2></h2></td>
            <td class="square" id="4"><h2></h2></td>
            <td class="square" id="5"><h2></h2></td>
          </tr>
          <tr>
            <td class="square" id="6"><h2></h2></td>
            <td class="square" id="7"><h2></h2></td>
            <td class="square" id="8"><h2></h2></td>
          </tr>
        </table>

        <div class="outcome"><h2></h2></div>

        <div class="newGame"><h2>New Game</h2></div>
      </div>
    );
  }
}
export default App;
