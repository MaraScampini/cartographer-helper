import React, { useEffect, useState, useCallback } from "react";
import Cell from "./Cell";

interface BasicMapProps {
  terrain: string;
  icon: JSX.Element | null;
}

interface CellState {
  type: string;
  blocked: boolean;
  available: boolean;
  icon: JSX.Element | null;
}

const BOARD_SIZE = 11;
const TOTAL_CELLS = BOARD_SIZE * BOARD_SIZE;

const BasicMap: React.FC<BasicMapProps> = ({ terrain, icon }) => {
  const [board, setBoard] = useState<CellState[]>([]);

  useEffect(() => {
    // Initialize the board
    const initialBoard = Array(TOTAL_CELLS).fill({
      type: "empty",
      blocked: false,
      available: true,
      icon: null
    });
    // Set initial mountains and ruins
    [13, 28, 31, 55, 77, 97].forEach(index => initialBoard[index] = {
      type: "mountain",
      blocked: true,
      available: false,
      icon: null

    });
    [12, 18, 28, 52, 89, 95, 108].forEach(index => initialBoard[index] = {
      type: "ruin",
      blocked: false,
      available: true,
      icon: null
    });
    setBoard(initialBoard);
  }, []);

  const handleCellClick = useCallback((index: number) => {
    if (terrain === "") return;
    setBoard(prevBoard => {
      const newBoard = [...prevBoard];
      const currentCell = newBoard[index];

      if (currentCell.blocked) {
        // Do nothing if the cell is blocked
        return newBoard;
      }

      if (currentCell.type === terrain) {
        // If clicking on a cell with the same terrain, set it to empty
        newBoard[index] = {
          type: "empty",
          blocked: false,
          available: true,
          icon: null
        };
      } else {
        // If clicking on an empty cell or a cell with different terrain, update it
        newBoard[index] = {
          type: terrain,
          blocked: false,
          available: false,
          icon: icon
        };
      }

      return newBoard;
    });
  }, [terrain]);

  const MemoizedCell = React.memo(Cell);

  return (
    <div className="grid grid-cols-11 gap-0">
      {board.map((cellType, index) => (
        <MemoizedCell
          key={index}
          x={index % BOARD_SIZE}
          y={Math.floor(index / BOARD_SIZE)}
          available={cellType.available}
          backgroundColor={cellType.type}
          blocked={cellType.blocked}
          onClick={() => handleCellClick(index)}
          icon={cellType.icon}
        />
      ))}
    </div>
  );
};

export default BasicMap;