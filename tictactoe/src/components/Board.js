import './Board.css';
import Grid from './Grid';

function Board({xIsNext,squares,changePlay,status}){
function handleClick(i){
if (calculateWinner(squares)||squares[i]) {
       return;
     }
     if (xIsNext) {
       squares[i] = 'X';
     } else {
       squares[i] = 'O';
     }
     const player = calculateWinner(squares);
     changePlay(player);
}
  return(
  <>
  <div className="status">{status}
  </div>
   <div className="Board">
    <Grid value={squares[0]} onGridClick={() => handleClick(0)} />
    <Grid value={squares[1]} onGridClick={() => handleClick(1)} />
    <Grid value={squares[2]} onGridClick={() => handleClick(2)} />
    <Grid value={squares[3]} onGridClick={() => handleClick(3)} />
    <Grid value={squares[4]} onGridClick={() => handleClick(4)} />
    <Grid value={squares[5]} onGridClick={() => handleClick(5)} />
    <Grid value={squares[6]} onGridClick={() => handleClick(6)} />
    <Grid value={squares[7]} onGridClick={() => handleClick(7)} />
    <Grid value={squares[8]} onGridClick={() => handleClick(8)} />
   </div>
   </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;