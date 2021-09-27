import React, { useState } from 'react';
import { Board } from '../Board';
import { calculateWinner } from '../../helper';

export const Game: React.FC = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button type="button" className="start__btn" onClick={() => setBoard(Array(9).fill(null))}> Очистить поле </button>
    );
  };

  return (
    <div className="wrapper">
      <Board squares={board} click={handleClick} />
      <div className="info">
        <div>Score</div>
        <div>Player 1: 1</div>
        <div>Player 2: 2</div>
        {startNewGame()}
        <span className="game__info">
          {winner ? `Победитель ${winner}` : `Сейчас ходит ${xIsNext ? 'X' : 'O'}`}
        </span>
      </div>
    </div>
  );
};
