import Player from "./components/Player.jsx"
import "./index.css";
function App() {
  

  return (
    <main>
      <div id="game-container">

        {/* Player Information Area */}
        <ol id="players">
          {/*  List of Players displayed as flex box*/}
          <Player playerName="player name" symbol="X"/>
          <Player playerName="player name" symbol="X"/>
          
        </ol>
        
      </div>

    </main>
  )
}

export default App
