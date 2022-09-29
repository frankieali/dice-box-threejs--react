import React from 'react';
import './App.css';
import DiceBox from './components/DiceBox';
import RollButton from './components/RollButton';
import DisplayResults from './components/DisplayResults';

function App() {

  return (
    <div className="App">
      <div id="dice-box">
        <DiceBox>
          <RollButton />
        </DiceBox>
        <DisplayResults />
      </div>
    </div>
  );
}

export default App;
