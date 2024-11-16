import MountainSvg from "../assets/MountainSvg";
import RuinSvg from "../assets/RuinSvg";
import { CellState } from "../utils/types";

const BOARD_SIZE = 11;
const TOTAL_CELLS = BOARD_SIZE * BOARD_SIZE;


export const generateDefaultBoard = (): CellState[] => {
    const board = Array(TOTAL_CELLS).fill({
        background: "empty",
        blocked: false,
        available: true,
        icon: null,
        type: "empty"
    });

    // Set initial mountains
    [14, 30, 60, 90, 106].forEach(index => board[index] = {
        background: "mountain",
        blocked: true,
        available: false,
        icon: <MountainSvg/>,
        type: "mountain"
    });

    // Set initial ruins
    [16, 23, 31, 89, 97, 104].forEach(index => board[index] = {
        background: "ruin",
        blocked: false,
        available: true,
        icon: <RuinSvg />,
        type: "ruin"
    });

    return board;
};