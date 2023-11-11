import { useState } from "react";

import "./index.css";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log";

// list of player moves
let logsList = [];

function App() {

  // Symbol of current player
  const [currentPlayerSymbol, setCurrentPlayerSymbol] = useState("X");

  // game moves (object)
  const [turns, setTurns] = useState([]);

    // callback function to change the player symbol
    function handleCurrentPlayerSymbol(lastPlayerSymbol){

        // updating current player symbol
        let nextPlayerSymbol = lastPlayerSymbol == "X" ? "O" : "X";
        setCurrentPlayerSymbol(nextPlayerSymbol);

    }

  // callback functions to register each player moves
  function handleTurns(rowNum, colNum) {

    // update turns object with the latest player moves
    setTurns(previousTurns => {

      let lengthOfPreviousTurns = previousTurns.length;
      let previousTurnNum = 0; // first position
      let previousPlayerSymbol;

      // if at least one move has been make, compute update the immediatePlayerSymbol to not just be "X"
      if (lengthOfPreviousTurns > 0){
        previousPlayerSymbol = previousTurns[previousTurnNum]["playerSymbol"];

        console.log(`previousPlayerSymbol: ${previousPlayerSymbol}`);
        console.log('');
      }
      
      // updating game turns immutably.
      // immediatePlayerSymbol refers to the player that just made a move
      let mostRecentMovePosition = `${colNum},${rowNum}`; // inverted to avoid key duplication in Gameboard component
      let listOfAllOccupiedPositions = logsList.map(move => move.key); // list of all occupied positions
      let isMostRecentPositionAlreadyOccupied = listOfAllOccupiedPositions.includes(mostRecentMovePosition);
      console.log(`listOfAllOccupiedPositions: ${listOfAllOccupiedPositions}`);
      console.log(`mostRecentMovePosition: ${mostRecentMovePosition}`);
      console.log(`isMostRecentPositionAlreadyOccupied: ${isMostRecentPositionAlreadyOccupied}`);

      let updatedTurns = [...previousTurns];
      if (!isMostRecentPositionAlreadyOccupied){

        updatedTurns.unshift({'rowNum': rowNum, 'colNum': colNum, 'playerSymbol': currentPlayerSymbol});
  
        // register the next player
        handleCurrentPlayerSymbol(currentPlayerSymbol);
        
      }

      return updatedTurns;

    });

  }

  // function to populate logs data
  function handleLogs(individualLog){

    // make the latest move highlighted
    // if (logsList.length > 0){
    //   logsList[0].class = '';
    //   individualLog.class = "highlighted";
    // }

    logsList.unshift(individualLog);

    console.log(`indivdualLogElement className: ${individualLog.className}`);
    console.log(`indivdualLogElement class: ${individualLog.class}`);
    console.log(`indivdualLogElement id: ${individualLog.id}`);



  }
  
  // TO DO:
  // switching between players and changing the player symbol on gameboard effectively, lifting state up
  // using turns instead of gameboard data in the App.js file
  // a log component to log player actions
  return (
    <main>
      <div id="game-container">

        {/* Player Information Area */}
        <ol id="players" className="highlight-player">
          {/*  List of Players displayed as flex box*/}
          <Player playerName="player name" playerSymbol="X" activePlayer={currentPlayerSymbol}/>
          <Player playerName="player name" playerSymbol="O" activePlayer={currentPlayerSymbol}/>
        </ol>

        <ol id="game-board">
          <Gameboard gameTurns={turns} handleGameTurns={handleTurns} handleLogs={handleLogs}/>
        </ol>

        <ol id="log">
          <Log logsList={logsList}></Log>          
        </ol>
        
      </div>

    </main>
  )
}

export default App
