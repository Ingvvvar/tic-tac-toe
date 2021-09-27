import React from 'react';

type Props = {
  onClick: () => void;
  value: number;
};

export const Square: React.FC<Props> = ({ onClick, value }) => {
  return (
    <div>
      <button type="button" className="square" onClick={onClick}>{value}</button>
    </div>
  );
};
