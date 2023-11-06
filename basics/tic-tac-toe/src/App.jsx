import { useState } from "react";

import "./index.css";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";

function App() {

  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState('X');

  function handleCurrentPlayerSymbol(){

    setCurrentPlayerSymbol((previousPlayerSymbol) => {

      return previousPlayerSymbol == "X" ? "O" : "X";

    });
  }
  
  // TO DO:
  // switching between players and changing the player symbol on gameboard effectively, lifting state up
  // using turns instead of gameboard data in the App.js file
  // a log component to log player actions
  return (
    <main>
      <div id="game-container">

        {/* Player Information Area */}
        <ol id="players">
          {/*  List of Players displayed as flex box*/}
          <Player playerName="player name" symbol="X"/>
          <Player playerName="player name" symbol="O"/>
        </ol>

        <ol id="game-board">
          <Gameboard playerSymbol={currentPlayerSymbol}/>
        </ol>
        
      </div>

    </main>
  )
}

export default App
