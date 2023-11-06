import {useState} from 'react';

import "../index.css";

var initialGameData = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function Gameboard({playerName}){

    const [currentGameData, setCurrentGameData] = useState(initialGameData);

    function handleButtonClick(buttonRowNum, buttonColumnNum, playerName){

        setCurrentGameData((previousGameData) => {

            // creating a copy of previousGameData to ensure that it's updated immutably per ReactJS convention
            const updatedGameBoard = [...previousGameData].map((rowData) => [...rowData]); 
            console.log(`updatedGameBoard: ${updatedGameBoard}`);

            // updating previousGameData immutably
            updatedGameBoard[buttonRowNum][buttonColumnNum] = "X";

            return updatedGameBoard;

        });

    }

    return (
        <>
            {
                // Each row
                currentGameData.map((rowData, rowIndex) => {
                    return <li key={rowIndex}>
                        <ol>
                            {
                                rowData.map((buttonSymbol, columnIndex) => {
                                    return <li key={columnIndex}>
                                        <button id="game-board button" onClick={() => handleButtonClick(rowIndex, columnIndex, playerName)}>
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


