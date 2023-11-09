import {useState} from 'react';

export default function Player({playerName, playerSymbol, activePlayer}){

    console.log(`playerSymbol: ${playerSymbol}, activePlayer: ${activePlayer}`)

    const [isEditing, setIsEditing] = useState(false);
    const [inputContent, updateInputContent] = useState(playerName);

    let buttonContent = 'Edit';
    let playerNameElement = <span className="player-name">{inputContent}</span>;

    function handleButtonClick(){
        setIsEditing(editing => !editing);
    }

    function handlePlayerNameChange(event){

        // current value of playerName per user input
        let currentPlayerName = event.target.value;
        updateInputContent(previousInputContent => currentPlayerName);
    }

    if (isEditing){
        buttonContent = 'Save';
        playerNameElement = <input className='player input' type="text" value={inputContent} onChange={handlePlayerNameChange}></input>;
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
            <button onClick={handleButtonClick}>{buttonContent}</button>
            
        </li>
    );
}