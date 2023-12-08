import { useState, useRef} from 'react';
import Player from './components/Player.jsx';

function App() {

  return (
    <>
      <Player />
      <div id="challenges"></div>
    </>
  );
}

export default App;
