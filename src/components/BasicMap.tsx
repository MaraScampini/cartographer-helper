import React, { useEffect, useState, useCallback } from "react";
import Cell from "./Cell";
import { BasicMapProps, CellState } from "../utils/types";
import { generateDefaultBoard } from "../boards/defaultBoard";
import RuinSvg from "../assets/RuinSvg";

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
        return newBoard;
      }

      if (currentCell.type === "ruin" && currentCell.background !== "ruin") {
        // IF THE CELL WAS A RUIN AND IS FILLED, GO BACK TO RUIN
        newBoard[index] = {
          background: "ruin",
          blocked: false,
          available: true,
          icon: <RuinSvg />,
          type: "ruin"
        };
      } else if (currentCell.background === terrain) {
        // IF THE CELL IS FILLED, GO BACK TO EMPTY
        newBoard[index] = {
          background: "empty",
          blocked: false,
          available: true,
          icon: null,
          type: "empty"
        };
      } else {
        // IF THE CELL IS EMPTY, FILL IT WITH THE PLAYER CHOSEN TERRAIN
        newBoard[index] = {
          background: terrain,
          blocked: false,
          available: false,
          icon: icon,
          type: newBoard[index].type
        };
      }

      return newBoard;
    });
  }, [terrain]);

  const MemoizedCell = React.memo(Cell);

  return (
    <div className="border border-solid border-black p-1">
      <div className="grid grid-cols-11 gap-0 border border-solid border-black">
        {board.map((cellType, index) => (
          <MemoizedCell
            key={index}
            x={index % BOARD_SIZE}
            y={Math.floor(index / BOARD_SIZE)}
            available={cellType.available}
            backgroundColor={cellType.background}
            blocked={cellType.blocked}
            onClick={() => handleCellClick(index)}
            icon={cellType.icon}
            type={cellType.type}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicMap;