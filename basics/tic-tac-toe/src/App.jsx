import { useState } from "react";

import "./index.css";

import AllPossibleWinningCombination from "./data/all-possible-wining-comibinations";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log";
import Gameover from "./components/Gameover";

// affected
"currentPlayerSymbol";

// gameboard Data - players' moves
var INITIAL_GAMEDATA = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

// list of player moves
// let logsList = [];

// function to derive:
// i. current player symbol, 
// ii. name of player "X"
// iii. name of player "Y"
function handleplayersDetails(
  {
    symbol = null,
    playerName = null,
    turns = []
  }
){

  let currentPlayerSymbol = "X";

  // most recent gameboard move that was made by a player
  let mostRecentMove;
  // player who made the most recent move
  let mostRecentMovePlayerSymbol;

  // update the current player symbol based on the most recent player move
  console.log(`turns: ${turns}, type: ${typeof(turns)}`);
  console.log(`turns.length: ${turns.length}`);

  // console.log(`all wining combinantions: ${AllPossibleWinningCombination}`);
  if (turns.length > 0){
    mostRecentMove  = turns[0];
    mostRecentMovePlayerSymbol = mostRecentMove.playerSymbol;

    // if the symbol of the player that made the most recent game move is "X", set the current player's symbol to "Y" and vice versa
    currentPlayerSymbol = mostRecentMovePlayerSymbol === "X" ? "O" : "X";
  }

  return currentPlayerSymbol;

}

// function to derive a winner
function deriveWinner(
  gameData, // gameboard data
  turnCount // number of game moves that have been made
  ){

  let gameEndObject = {
    "winnerSymbol": "null",
    "isWinner": false,
    "isDraw": false
  };

  // let nullRowCounter = 0;
  for (var rowNum in AllPossibleWinningCombination){

    let winningCombination = AllPossibleWinningCombination[rowNum];
    
    // location of each three winning squares
    let squareOnePoints = winningCombination[0];
    let squareTwoPoints = winningCombination[1];
    let squareThreePoints = winningCombination[2];

    // each three winning squares's symbol
    let squareOneSymbol = gameData[squareOnePoints.rowNum][squareOnePoints.colNum];
    let squareTwoSymbol = gameData[squareTwoPoints.rowNum][squareTwoPoints.colNum];
    let squareThreeSymbol = gameData[squareThreePoints.rowNum][squareThreePoints.colNum];

    // console.log(`${squareOne} ${squareTwo} ${squareThree}`);

    // if a winner exists, register the player's name, other wise state that there's been a draw when all 9 moves have been made
    if (squareOneSymbol != null && squareOneSymbol == squareTwoSymbol && squareTwoSymbol == squareThreeSymbol) {
      console.log(`${squareOneSymbol} ${squareTwoSymbol} ${squareThreeSymbol}`);
      console.log(`winner found: ${squareOneSymbol}`);
      gameEndObject.winnerSymbol = squareOneSymbol;
      gameEndObject.isWinner = true;
      break
    }
    else if (!gameEndObject.isWinner && turnCount == 9) gameEndObject.isDraw = true;
    
  }

  return gameEndObject;
}




// App 
function App() {

  // gameboard data
  const [gameData, updateGameData] = useState(INITIAL_GAMEDATA);

  // game moves (object)
  let [turns, setTurns] = useState({
    each: []
  });

  // player symbols and their current names
  // names of players with symbol "X" and "Y"
  let [playersNames, updatePlayersName] = useState({
    "X": "Player 1",
    "O": "Player 2",
  });
  
  console.log("");
  console.log(`playersNames: ${playersNames.X}`);
  console.log(`playersNames: ${playersNames.O}`);

  // current player symbol
  let currentPlayerSymbol = handleplayersDetails({turns: turns.each});

  // -----------------------------------------------------
  // gameEndObject
  // check for winner
  
  let gameEndObject = deriveWinner(
    gameData, 
    // playersNames,
    turns.each.length
  );
  console.log(`gameEndObject: ${gameEndObject}`);
  let isWinner = gameEndObject.isWinner;
  let winnerSymbol = gameEndObject["winnerSymbol"];
  let winnerName;

  // setting winnerName if any
  if (winnerSymbol != null){
    winnerName = playersNames[winnerSymbol]
    gameEndObject['winnerName'] = winnerName;
    console.log(`winnerSymbol: ${winnerSymbol}`);
    console.log(`winnerName: ${winnerName}`);
    console.log(`winnerName: ${winnerName}`);
  }

  let isDraw = gameEndObject.isDraw;
  // -----------------------------------------------------

  // reverse current player if a winner exists to avoid displaying the update
  if (isWinner){
    console.log(`winner now exists, updating currentPlayerSymbol as the previous player's symbol`);
    currentPlayerSymbol = currentPlayerSymbol == "X" ? "O" : "X";
  }

  // function to update player names
  function handleNewPlayerName(playerSymbol, newPlayerName){

    updatePlayersName(previousPlayersNamesObject => {
      
      return {
        ...previousPlayersNamesObject,
        [playerSymbol]: newPlayerName
      }
    });
  }

  // function to register each player moves
  function handleTurns(rowNum, colNum) {

    // update gameboard immutably
    updateGameData(prevGameGata => {

      let updatedGameData = [...prevGameGata.map(row => [...row])];

      updatedGameData[rowNum][colNum] = currentPlayerSymbol;

      return updatedGameData;

    });
    
    // Add new move to turns data if there's no winner or draw yet
    if (!isWinner && !isDraw){

      // update turns object with the latest player moves
      setTurns((previousTurnsObject) => {

        let updatedTurnsObject = {
          ...previousTurnsObject,      
        };

        // register current player's move and log it move before determining who the next player is
        updatedTurnsObject.each.unshift({'rowNum': rowNum, 'colNum': colNum, 'playerSymbol': currentPlayerSymbol});

        return updatedTurnsObject;

      });
    }

  }

  // function to reset game-board and turns data if when game has ended i.e when there's a winner or draw
  function handleNewGame(event){

    console.log(`in handleNewGame`);

    // reset game-board data
    updateGameData(prevGameGata => INITIAL_GAMEDATA);

    // reset turns data
    setTurns(prevTurns => ({
      ...prevTurns,
      ['each']: []
    }));

    // reset player names
    updatePlayersName(previousPlayerNamesObject => {
      
      return {
        ...previousPlayerNamesObject,
        ["X"]: "Player 1",
        ["O"]: "Player 2",
      }

    });
  
  }
  
  return (
    <main>
      <div id="game-container">

        {/* Game Over - display if the game is over*/}
        {(isWinner || isDraw) && <Gameover gameEndObject={gameEndObject} handleNewGame={handleNewGame}></Gameover>}

        {/* Player Information Area */}
        <ol id="players" className="highlight-player">
          {/*  List of Players displayed as flex box*/}
          <Player playerName={{...playersNames}.X} playerSymbol="X" activePlayer={currentPlayerSymbol} handleNewPlayerName={handleNewPlayerName}/>
          <Player playerName={{...playersNames}.O} playerSymbol="O" activePlayer={currentPlayerSymbol} handleNewPlayerName={handleNewPlayerName}/>
        </ol>

        <ol id="game-board">
          <Gameboard gameData={gameData} handleGameTurns={handleTurns} gameEndObject={gameEndObject}/>
        </ol>
        
      </div>

      <ol id="log">
          <Log turns={turns.each} playersNames={playersNames}></Log>          
      </ol>

    </main>
  );
}

export default App
