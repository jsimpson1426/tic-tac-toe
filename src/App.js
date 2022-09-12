import './App.css';
import {React, useState} from 'react';
import GameBoard from './components/GameBoard/GameBoard';

const App = () => {

  const [currentTurn, setCurrentTurn] = useState('x');
  const [values, setValues] = useState(
    [ ["","",""],
      ["","",""],
      ["","",""]]);

  const changeTurn = () => {
    currentTurn === 'x' ? setCurrentTurn('o') : setCurrentTurn('x');
    console.log(`current turn: ${currentTurn}`);
  }


  const handleClick = (value) => {
    const row = Math.floor((value - 1) / 3);
    const column = (value - 1) % 3;
    if(values[row][column] === ""){
      let newValues = [...values];
      console.log(newValues);
      newValues[row][column] = currentTurn;
      setValues(newValues);
      changeTurn();
    } else return;
    
    console.log(`row: ${row} column: ${column}`);
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <GameBoard handleClick={handleClick} />
    </div>
  );
}

export default App;
