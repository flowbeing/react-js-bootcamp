import { useRef, useState } from "react";

export default function Player({propOne}) {
  let playerName = useRef();

  let [enteredPlayerName, updatePlayerName] = useState();

  function handleButtonClick(){
    
    updatePlayerName(playerName.current.value);
    playerName.current.value = "";
    
  }

  return (
    <section id="player">
      <h2>{enteredPlayerName ? enteredPlayerName : "Welcome unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
      <p>This is a paragrph value: {propOne}</p>
    </section>
  );
}
