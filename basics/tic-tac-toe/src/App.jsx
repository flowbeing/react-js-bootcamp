import { useState } from "react";

import "./index.css";

import AllPossibleWinningCombination from "./data/all-possible-wining-comibinations";

import Player from "./components/Player.jsx";
import Gameboard from "./components/Gameboard.jsx";
import Log from "./components/Log";

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

  let playersDetailsObject = {
    currentPlayerSymbol: "X",
    "X": "Player 1",
    "O": "Player 2",
  };

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
    playersDetailsObject.currentPlayerSymbol = mostRecentMovePlayerSymbol === "X" ? "O" : "X";
  }

  // if player symbol & playerName are not null, update the relevant player names
  if (symbol !== null & playerName !== null){

    playersDetailsObject.symbol = playerName;

  }

  return playersDetailsObject;

}

// function to derive a winner
function deriveWinner(
  gameData, // gameboard data
  playersDetails, // object that contains the current player symbol, and names of players mapped to their symbols
  turnCount // number of game moves that have been made
  ){

  let gameEndObject = {
    "winnerName": "null",
    "isWinner": false,
    "isDraw": false
  };

  let nullRowCounter = 0;
  for (var rowNum in AllPossibleWinningCombination){

    let winningCombination = AllPossibleWinningCombination[rowNum];
    
    let squareOnePoints = winningCombination[0];
    let squareTwoPoints = winningCombination[1];
    let squareThreePoints = winningCombination[2];

    let squareOne = gameData[squareOnePoints.rowNum][squareOnePoints.colNum];
    let squareTwo = gameData[squareTwoPoints.rowNum][squareTwoPoints.colNum];
    let squareThree = gameData[squareThreePoints.rowNum][squareThreePoints.colNum];

    // console.log(`${squareOne} ${squareTwo} ${squareThree}`);

    // if a winner exists, register the player's name, other wise state that there's been a draw when all 9 moves have been made
    if (squareOne != null && squareOne == squareTwo && squareOne == squareThree) {
      console.log(`${squareOne} ${squareTwo} ${squareThree}`);
      console.log(`winner found: ${squareOne}`);
      gameEndObject.winnerName = playersDetails[squareOne];
      gameEndObject.isWinner = true;
      break
    }
    else if (squareOne == null && squareTwo == null && squareThree == null){
      nullRowCounter += 1;

      if (nullRowCounter == 3 && turnCount == 9) gameEndObject.isDraw = true;
    }
  }

  return gameEndObject;
}





function App() {

  // gameboard data
  const [gameData, updateGameData] = useState(INITIAL_GAMEDATA);

  // game moves (object)
  let [turns, setTurns] = useState({
    each: [],
    // log: []
  });

  // console.log(`turns in: ${turns}, type: ${typeof(turns)}`);

  // Object that contains:
  // 1. Current player symbol
  // 2. Names of players with symbol "X" and "Y"
  let playersDetails = handleplayersDetails({turns: turns.each});

  // check for winner
  console.log("");
  let gameEndObject = deriveWinner(
    gameData, 
    playersDetails,
    turns.each.length
  );
  let isWinner = gameEndObject.isWinner;
  let winnerName = gameEndObject.winnerName;
  
  let isDraw = gameEndObject.isDraw;
  console.log(`derived winner: ${winnerName}`);

  // reverse current player if a winner exists to avoid displaying the update
  if (isWinner){
    console.log(`winner now exists, updating currentPlayerSymbol as the previous player's symbol`);
    playersDetails.currentPlayerSymbol = playersDetails.currentPlayerSymbol == "X" ? "O" : "X";
  }

  // callback functions to register each player moves
  function handleTurns(rowNum, colNum) {

    // let updatedGameData = [...gameData.map(eachRow => [...eachRow])];
    // updatedGameData[rowNum][colNum] = playersDetails.currentPlayerSymbol;

    // updateGameData(prevGameData => updatedGameData);

    // update gameboard immutably
    updateGameData(prevGameGata => {

      let updatedGameData = [...prevGameGata.map(row => [...row])];

      updatedGameData[rowNum][colNum] = playersDetails.currentPlayerSymbol;

      return updatedGameData;

    });

    // gameData.forEach((item, itemIndex) => console.log(`itemIndex: ${itemIndex} item: ${typeof(item)}`));
    // console.log(`gamedata: ${gameData}`);

    console.log(`isWinner handleTurns: ${isWinner}`);
    if (!isWinner){

      // update turns object with the latest player moves
      setTurns((previousTurnsObject) => {

        let updatedTurnsObject = {
          ...previousTurnsObject,      
        };

        // register current player's move and log it move before determining who the next player is
        updatedTurnsObject.each.unshift({'rowNum': rowNum, 'colNum': colNum, 'playerSymbol': playersDetails.currentPlayerSymbol});

        // logging current player's move
        // let logsList = updatedTurnsObject.log.map(logElement => {
        //   let currentLogElementKey = logElement.key;
        //   let currentLogElementContent = logElement.children;

        //   let unhightledCurrentLogElement = <li key={currentLogElementKey}>{currentLogElementContent}</li>;

        //   return unhightledCurrentLogElement;
        // });

        // let lastMoveLogElement; // last move log element (li) if any
        // let lastMoveLogElementKey;
        // let lastMoveLogElementContent;
        // let unhighlightedLastMovelogElement;

        // if (logsList.length > 0){
        //   lastMoveLogElement = logsList[0];
        //   lastMoveLogElement.setAttribute("class", "");
        //   // lastMoveLogElementKey = lastMoveLogElement.key;
        //   // lastMoveLogElementContent = lastMoveLogElement.children;
        //   // console.log(`lastMoveLogElementKey: ${typeof(lastMoveLogElementKey)}`);

        //   // unhighlightedLastMovelogElement = <li key={lastMoveLogElementKey} className="highlighted">{lastMoveLogElementContent}</li>;
        //   // console.log(`logsList[0] == logsList[0] copy: ${logsList[0] == unhighlightedLastMovelogElement}`);
        //   // logsList.shift();
        //   // logsList.unshift(unhighlightedLastMovelogElement);
        // }

        // let currentMoveLog = <li key={`${colNum},${rowNum}`} className={(logsList.indexOf(currentMoveLog) !== -1 && logsList.indexOf(currentMoveLog) == 0) && "highlighted"}>{`${playersDetails.currentPlayerSymbol} selected R${rowNum + 1}, C${colNum + 1}`}</li>;
        // console.log(`index of currentMoveLog in logsList: ${logsList.indexOf(currentMoveLog)}`);
        // logsList.unshift(currentMoveLog);
        // console.log(currentMoveLog.props);
        // console.log(currentMoveLog.key);

        // updatedTurnsObject.log = [...logsList];
        // console.log(`updatedTurnsObject.log length: ${updatedTurnsObject.log}`);
        // updatedTurnsObject.log.forEach(item => console.log(`li key: ${item.key}, li class: ${item.props.className}`));

        return updatedTurnsObject;

      });
    }

  }

  // function to populate logs data
  // function handleLogs(individualLog){
  // 
  //   // make the latest move highlighted
  //   // if (logsList.length > 0){
  //   //   logsList[0].class = '';
  //   //   individualLog.class = "highlighted";
  //   // }
  // 
  //   logsList.unshift(individualLog);
  // 
  //   console.log(`indivdualLogElement className: ${individualLog.className}`);
  //   console.log(`indivdualLogElement class: ${individualLog.class}`);
  //   console.log(`indivdualLogElement id: ${individualLog.id}`);
  // 
  // }
  
  // TO DO:
  // HAVING ONLY ONE STATE IN APP.JS & DERIVE CURRENT PLAYER FROM PREVIOUS TURNS ✔️
  // switching between players and changing the player symbol on gameboard effectively, lifting state up 
  // using turns instead of gameboard data in the App.js file
  // a log component to log player actions ✔️
  // recognizing when the game is over
  // overlaying when the game is over, either when there's a draw or a winner
  // minimize / externalize codes
  return (
    <main>
      <div id="game-container">

        {/* Player Information Area */}
        <ol id="players" className="highlight-player">
          {/*  List of Players displayed as flex box*/}
          <Player playerName={playersDetails.X} playerSymbol="X" activePlayer={playersDetails.currentPlayerSymbol}/>
          <Player playerName={playersDetails.O} playerSymbol="O" activePlayer={playersDetails.currentPlayerSymbol}/>
        </ol>

        <ol id="game-board">
          <Gameboard gameData={gameData} handleGameTurns={handleTurns} gameEndObject={gameEndObject}/>
        </ol>
        
      </div>

      <ol id="log">
          <Log turns={turns.each}></Log>          
      </ol>

    </main>
  );
}

export default App
