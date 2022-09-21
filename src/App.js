import './App.css';
import {React, useState} from 'react';
import GameBoard from './components/GameBoard/GameBoard';
import SubmissionModal from './components/SubmissionModal/SubmissionModal';
import QuestionForm from './components/QuestionForm/QuestionForm';

const App = () => {

  const [currentTurn, setCurrentTurn] = useState('x');
  const [winner, setWinner] = useState('');
  const [values, setValues] = useState(
    [ ["","",""],
      ["","",""],
      ["","",""]]);


  const rowComplete = () =>{
    for(let i = 0; i < 3; i++){
      if(values[i][0] !== ""){
        if(values[i][0] === values[i][1] && values[i][1] === values[i][2]){
          return true;
        }
      }
    }
    return false;
  }

  const columnComplete = () => {
    for(let i = 0; i < 3; i++){
      if(values[0][i] !== ""){
        if(values[0][i] === values[1][i] && values[1][i] === values[2][i]){
          return true;
        }
      }
    }
    return false;
  }

  const diagonalComplete = () => {
    
    if(values[0][0] !== ""){
      if(values[0][0] === values[1][1] && values[1][1] === values[2][2]){
        return true;
      }
    }

    if(values[0][2] !== ""){
      if(values[0][2] === values[1][1] && values[1][1] === values[2][0]){
        return true;
      }
    }
    
    return false;
  };

  const hasWon = () => {
    if(rowComplete() || columnComplete() || diagonalComplete()){
      return true;
    }
    return false;
  };

  const doWin = () => {
    setWinner(currentTurn);
  };

  const changeTurn = () => {
    if(currentTurn === 'x'){
      setCurrentTurn('o');
    } else{
      setCurrentTurn('x');
    }
  };

  const handleClick = (value) => {
    const row = Math.floor((value - 1) / 3);
    const column = (value - 1) % 3;

    if(values[row][column] === "" && !winner){
      let newValues = [...values];
      newValues[row][column] = currentTurn;
      setValues(newValues);

      if(hasWon()){
        doWin();
      }else{
        changeTurn();
      }

    } else return;
  };

  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <h2>Current Turn: {currentTurn.toUpperCase()}</h2>
      <h2 hidden={winner === "" ? true : false}>{winner} has won!</h2>
      <GameBoard values={values} handleClick={handleClick} />
      <SubmissionModal content={<QuestionForm questionID="1" />}/>
    </div>
  );
}

export default App;
