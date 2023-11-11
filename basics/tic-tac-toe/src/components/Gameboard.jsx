import {useState} from 'react';

import "../index.css";

var gameData = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard({gameTurns, handleGameTurns}){
    
    // generating game data from gameTurns variable
    for (var turn of gameTurns){
        let turnRowNum = turn['rowNum'];
        let turnColNum = turn['colNum'];
        let turnPlayerSymbol = turn['playerSymbol'];

        gameData[turnRowNum][turnColNum] = turnPlayerSymbol;

        console.log('still in gameboard component');

    }

    return (
        <>
            {
                // Each row
                gameData.map((rowData, rowIndex) => {
                    return <li key={rowIndex}>
                        <ol>
                            {
                                rowData.map((buttonSymbol, columnIndex) => {
                                    return <li key={columnIndex}>
                                        <button id="game-board button" onClick={() => handleGameTurns(rowIndex, columnIndex)}>
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


