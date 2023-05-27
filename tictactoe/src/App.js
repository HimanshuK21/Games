import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import {useState} from 'react';

function App() {
const [squares,setSquares] = useState(Array(9).fill(null));
const [xIsNext,setXIsNext] = useState(true);
const [status,setStatus] = useState("X to Play");
const [winner , setWinner] = useState(null);

const changePlay = (player) =>{
 if(xIsNext){
  setStatus("O to Play");
 }
 else{
  setStatus("X to Play");
  }
  if(player){
  setStatus("Winner is "+player);
  setWinner(player);
  return;
  }
  setXIsNext(!xIsNext);
}

const ResetBoard = () => {
   setSquares(Array(9).fill(null));
   setXIsNext(true);
   setStatus("X to Play");
   setWinner(null);
}

  return (
  <>
    <div className="App">
     <Board squares={squares} xIsNext={xIsNext} changePlay={changePlay} status={status}/>
    </div>
    <button className="ResetBoard" onClick={ResetBoard}> Restart Game</button>
    {winner && <div className="Winner">
       {status}
       <button className="ResetBoard" onClick={ResetBoard}> Restart Game</button>
     </div>
    }
    </>
  );
}



export default App;
