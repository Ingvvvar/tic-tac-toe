import React, { useState } from 'react';
import { Board } from '../Board';
import { calculateWinner } from '../../helper';

export const Game: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [wX, setWx] = useState(0);
  const [wO, setWo] = useState(0);
  const winner = calculateWinner(board);
  const champion = winner?.toString();

  const handleClick = (index: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const clear = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);

    if (champion === 'X') {
      setWx((prev) => prev + 1);
    }

    if (champion === 'O') {
      setWo((prev) => prev + 1);
    }
  };

  const startNewGame = () => {
    return (
      <button type="button" className="start__btn" onClick={clear}> Очистить поле </button>
    );
  };

  return (
    <div className="wrapper">
      <Board squares={board} click={handleClick} />
      <div className="info">
        <div>Score</div>
        <div>
          Player X:
          {' '}
          {wX}
        </div>

        <div>
          Player O:
          {' '}
          {wO}
        </div>
        {startNewGame()}
        <span>
          {winner
            ? `Победитель ${winner}`
            : `Сейчас ходит ${xIsNext
              ? 'X' : 'O'}`}
        </span>
      </div>
    </div>
  );
};
