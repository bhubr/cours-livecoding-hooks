import React, { useState } from 'react';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHooks from './components/FormHooks';
import Character from './components/Character';
import './App.css';

function App() {
  const [characterId, setCharacterId] = useState(1);
  const nextCharacter = () => setCharacterId(characterId + 1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>React starter template</h1>
      </header>

      {/* <Counter /> */}
      {/* <CounterHooks />
      <FormHooks /> */}

      <button type="button" onClick={nextCharacter}>Next character</button>
      { (characterId < 3) && <Character characterId={characterId} /> }
    </div>
  );
}

export default App;
