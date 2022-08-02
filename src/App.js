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
    console.log('Turn Changed!');
  }


  const handleClick = (value) => {
    changeTurn();
    console.log(value);
  }

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <GameBoard handleClick={handleClick} />
    </div>
  );
}

export default App;
