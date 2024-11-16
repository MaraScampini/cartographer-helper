import { ReactElement, useEffect, useState } from "react";
import Cell from "./Cell"

const BasicMap = () => {

  const [board, setBoard] = useState<ReactElement[][]>([]);

  const generateMap = () => {
    let matrix = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    const board = [];
    for (let i = 0; i < matrix.length; i++) {
      const rows = [];
      for (let j = 0; j < 11; j++) {
        let backgroundColor = "empty";
        if(matrix[i][j] == 1) backgroundColor = "mountain";
        else if(matrix[i][j] == 2) backgroundColor = "ruin"
        rows.push(<Cell x={i} y={j} available={matrix[i][j] !== 1 ? true : false} backgroundColor={backgroundColor} />)
      }
      board.push(rows);
    }

    setBoard(board);

  }

  useEffect(() => {
    generateMap();
  }, [])

  return (
    <div className="flex justify-center">
      {board.map(row => (
        <div>
          {row}
        </div>
      ))}
    </div>
  )
}

export default BasicMap