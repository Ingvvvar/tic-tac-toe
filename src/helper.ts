export function calculateWinner(squares: string[]) {
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

  type Moves = {
    X: number;
    O: number;
    [key: string]: number;
  };

  const minMovesToWin: Moves = { X: 3, O: 3 };

  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    const tmpLine = [squares[a], squares[b], squares[c]].sort();

    if (tmpLine[0] && tmpLine[0] === tmpLine[2]) {
      return tmpLine[0];
    }

    if (tmpLine[0] && tmpLine[0] === tmpLine[1] && !tmpLine[2] && minMovesToWin[tmpLine[0]] > 1) {
      minMovesToWin[tmpLine[0]] = 1;
    }

    if (tmpLine[0] && !tmpLine[1] && !tmpLine[2] && minMovesToWin[tmpLine[0]] > 2) {
      minMovesToWin[tmpLine[0]] = 2;
    }
  }

  const movesRemain = 9 - squares.filter(el => el != null).length;
  const mover = movesRemain % 2 ? 'X' : 'O';
  const notMover = movesRemain % 2 ? 'O' : 'X';

  if (minMovesToWin[mover] > Math.ceil(movesRemain / 2)
    && minMovesToWin[notMover] > Math.floor(movesRemain / 2)) {
    return 'ничья';
  }

  return null;
}
