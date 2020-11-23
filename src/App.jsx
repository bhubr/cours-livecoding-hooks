import React from 'react';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHooks';
import FormHooks from './components/FormHooks';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React starter template</h1>
      </header>

      {/* <Counter /> */}
      <CounterHooks />
      <FormHooks />
    </div>
  );
}

export default App;
