import { useState, useRef} from 'react';
import Player from './components/Player.jsx';

function App() {
  let dict = {"propOne": 1};

  return (
    <>
      <Player {...dict}/>
      <div id="challenges"></div>
    </>
  );
}

export default App;
