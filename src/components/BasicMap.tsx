import React, { useEffect, useState, useCallback } from "react";
import Cell from "./Cell";
import { BasicMapProps, CellState } from "../utils/types";
import { generateDefaultBoard } from "../boards/defaultBoard";

const BOARD_SIZE = 11;

const BasicMap: React.FC<BasicMapProps> = ({ terrain, icon, boardType }) => {
  const [board, setBoard] = useState<CellState[]>([]);

  useEffect(() => {
    let initialBoard: CellState[];
    switch (boardType) {
      case "basic":
        initialBoard = generateDefaultBoard();
        break;
      default:
        initialBoard = generateDefaultBoard();
    }
    setBoard(initialBoard);
  }, [boardType]);

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