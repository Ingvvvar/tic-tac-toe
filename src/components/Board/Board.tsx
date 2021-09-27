import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
          <Square key={uuidv4()} value={square} onClick={() => click(i)} />
        ))
      }
    </div>
  );
};
