import {useState} from 'react';

export default function Player({playerName, playerSymbol, activePlayer, handleNewPlayerName}){

    console.log(`playerSymbol: ${playerSymbol}, activePlayer: ${activePlayer}`)

    const [isEditing, setIsEditing] = useState(false);
    const [inputContent, updateInputContent] = useState(playerName);

    let buttonContent = 'Edit';
    let playerNameElement = <span className="player-name">{playerName}</span>;

    function handleButtonClick(newPlayerName){
        
        console.log(`button content: ${buttonContent}, isEditing: ${isEditing}`);

        // if a new player's name has been saved, register it in App.js
        if (isEditing){ // using "isEditing == true" due to value update lag
            handleNewPlayerName(playerSymbol, newPlayerName);
        }

        // reset isEditing to false;
        setIsEditing(editing => !editing);
        console.log(`button content: ${buttonContent}, isEditing: ${isEditing}`);

        // set inputContent to equal the new player name
        updateInputContent(playerName);
        
    }

    // handles content 
    function handleInputElementChange(event){

        // current value of playerName per user input
        let currentPlayerName = event.target.value;
        updateInputContent(currentPlayerName);
    }

    if (isEditing){
        buttonContent = 'Save';
        playerNameElement = <input className='player input' type="text" value={inputContent} onChange={handleInputElementChange}></input>;
    }
    else if (!isEditing){
        buttonContent = 'Edit';
    }


    return (
        <li className={`${activePlayer == playerSymbol && "active"}`}>
            <span className="player">

                {playerNameElement}
                <span className="player-symbol">{playerSymbol}</span>

            </span>
            <button onClick={()=> handleButtonClick(inputContent)}>{buttonContent}</button>
            
        </li>
    );
}