import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Track the order of moves for each player
  const [xMoves, setXMoves] = useState([]);
  const [oMoves, setOMoves] = useState([]);
  // Score tracking
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [gameOver, setGameOver] = useState(false);

  function handleClick(i) {
    // Don't allow moves if game is over or square is occupied
    if (gameOver || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    const currentPlayer = xIsNext ? 'X' : 'O';
    const currentMoves = xIsNext ? [...xMoves] : [...oMoves];

    // Add the new move
    nextSquares[i] = currentPlayer;
    currentMoves.push(i);

    // If player has more than 3 pieces, remove the oldest one
    if (currentMoves.length > 3) {
      const oldestMove = currentMoves.shift(); // Remove first (oldest) move
      nextSquares[oldestMove] = null; // Clear that square
    }

    // Update state
    setSquares(nextSquares);
    if (xIsNext) {
      setXMoves(currentMoves);
    } else {
      setOMoves(currentMoves);
    }

    // Check for winner after move
    const winner = calculateWinner(nextSquares);
    if (winner) {
      setGameOver(true);
      setScores(prevScores => ({
        ...prevScores,
        [winner]: prevScores[winner] + 1
      }));
    }

    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXMoves([]);
    setOMoves([]);
    setXIsNext(true);
    setGameOver(false);
  }

  function resetScores() {
    setScores({ X: 0, O: 0 });
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = '🎉 Winner: ' + winner + '!';
  } else {
    const xCount = squares.filter(square => square === 'X').length;
    const oCount = squares.filter(square => square === 'O').length;
    status = `Next player: ${xIsNext ? 'X' : 'O'} (X: ${xCount}/3, O: ${oCount}/3)`;
  }

  return (
    <div className="game-container">
      {/* Score Board */}
      <div className="scoreboard">
        <h3>🏆 Score Board</h3>
        <div className="score-display">
          <div className="score-item">
            <strong>Player X: {scores.X}</strong>
          </div>
          <div className="score-item">
            <strong>Player O: {scores.O}</strong>
          </div>
        </div>
        <button className="reset-scores-btn" onClick={resetScores}>
          Reset Scores
        </button>
      </div>

      {/* Game Status */}
      <div className="status">
        {status}
      </div>
      
      {/* Game Board */}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

      {/* Reset Game Button */}
      <div className="button-container">
        <button className="reset-game-btn" onClick={resetGame}>
          {gameOver ? '🎮 Play Again' : '🔄 Reset Game'}
        </button>
      </div>
    </div>
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