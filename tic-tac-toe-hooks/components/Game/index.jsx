import React, { useState } from 'react';
import Board from '../Board';

function Game() {
  const [history, setHistory] = useState([{}]);
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = i => {
    if (winnerCheck) return;

    const copySquares = squares.slice();
    copySquares[i] = xIsNext ? 'X' : 'O';
    setSquare(copySquares);
    setXIsNext(!xIsNext);
    setHistory([...history, {...copySquares}]);
    setStepNumber(history.length);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const whoWinner = squares => {
    const winNum = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winNum.length; i++) {
      const [a, b, c] = winNum[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
      );
  });

  const status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
  const winner = `이긴 사람은 ${whoWinner(squares)} 입니다.`;
  const winnerCheck = whoWinner(squares);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} xIsNext={xIsNext} setSquare={setSquare} setXIsNext={setXIsNext} handleClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>{winner}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;