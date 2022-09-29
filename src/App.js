import React, {useState} from 'react';
import './App.css';
import DiceBox from './components/DiceBox';
import RollButton from './components/RollButton';

function App() {

  return (
    <div className="App">
      <div id="dice-box">
        <DiceBox>
          <RollButton />
        </DiceBox>
      </div>
    </div>
  );
}

export default App;
