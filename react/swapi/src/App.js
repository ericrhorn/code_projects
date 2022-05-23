import './App.css';
import React, {useState, useEffect} from 'react';

import StarPeople from './components/starPeople';

function App(props) {

  const [characters, setCharacters] = useState([])

  return (
    <div className="App">
      <StarPeople characters={characters} setCharacters={setCharacters}/>
    </div>
  );
}

export default App;
