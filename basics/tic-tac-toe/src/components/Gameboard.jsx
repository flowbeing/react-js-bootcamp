import {useState} from 'react';

import "../index.css";

// players' moves
// var gameData = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];

export default function Gameboard({gameData, handleGameTurns, gameEndObject}){

    // console.log(`gameEndObject isWinner: ${gameEndObject.isWinner}`);
    // console.log(`gameEndObject isDraw: ${gameEndObject.isDraw}`);
    // console.log(`gameEndObject winnerName: ${gameEndObject.winnerName}`);


    let isWinner = gameEndObject.isWinner;
    let isDraw = gameEndObject.isDraw;
    
    // generating game data from gameTurns variable
    // for (var turn of gameTurns){
    //     let turnRowNum = turn['rowNum'];
    //     let turnColNum = turn['colNum'];
    //     let turnPlayerSymbol = turn['playerSymbol'];
    // 
    //     gameData[turnRowNum][turnColNum] = turnPlayerSymbol;
    // 
    //     // current turn as a list
    //     let currentTurnsList = <li>{`${turnPlayerSymbol} selected R${turnRowNum}, C${turnColNum}`}</li>;
    //     handleLogs(currentTurnsList);
    // 
    //     console.log('still in gameboard component');
    // 
    // }

    // latest game move
    // if (gameTurns.length > 0){
    //     let latestGameMove = gameTurns[0];
    //     let latestRowNum = latestGameMove['rowNum'];
    //     let latestColNum = latestGameMove['colNum'];
    //     let latestPlayerSymbol = latestGameMove['playerSymbol'];
    // 
    //     // registers a new move only when a valid move has been made
    //     gameData[latestRowNum][latestColNum] = latestPlayerSymbol;
    // 
    //     let latestTurnAsList = <li key={`${latestColNum},${latestRowNum}`} className='highlighted'>{`${latestPlayerSymbol} selected R${latestRowNum}, C${latestColNum}`}</li>;
    //     handleLogs(latestTurnAsList);
    // 
    // }

    console.log(`gamedata: ${gameData}`);

    return (
        <>
            {
                // Each row
                gameData.map((rowData, rowIndex) => {
                    return <li key={rowIndex}>
                        <ol>
                            {
                                rowData.map((buttonSymbol, columnIndex) => {

                                    // Included: disable current board position if it's not empty or null
                                    let currentPositionSymbol = gameData[rowIndex][columnIndex];

                                    return <li key={`${rowIndex},${columnIndex}`}>
                                        <button 
                                            id="game-board button" 
                                            disabled={currentPositionSymbol !== null || (isDraw || (isWinner))} 
                                            onClick={() => handleGameTurns(rowIndex, columnIndex)}
                                        >
                                            {buttonSymbol}
                                        </button>
                                    </li>
                                })
                            }
                        </ol>
                    </li>
                })
            }                     
        </>
    );

}

// {
//     gameData.map((rowItem, rowIndex) => {
//         return <li key={rowIndex}>
//             <ol id="game-board ol">
//                 {rowItem.map((colItem, colIndex) => {
//                     return <li key={colIndex}>
//                         <button id="game-board button">
//                             {colItem}
//                         </button>
//                     </li>
//                 })}
//             </ol>
//         </li>
//     })
// }


