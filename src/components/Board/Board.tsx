import React from 'react';
import { Square } from '../Square';

interface Props {
  squares: number[];
  click: (index: number) => void;
}

export const Board: React.FC<Props> = ({ squares, click }) => {
  return (
    <div className="board">
      {
        squares.map((square, i) => (
          <Square key={new Date().toDateString()} value={square} onClick={() => click(i)} />
        ))
      }
    </div>
  );
};
