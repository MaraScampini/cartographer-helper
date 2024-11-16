import { CellState } from "../utils/types";

const BOARD_SIZE = 11;
const TOTAL_CELLS = BOARD_SIZE * BOARD_SIZE;

export const generateDefaultBoard = (): CellState[] => {
    const board = Array(TOTAL_CELLS).fill({
        type: "empty",
        blocked: false,
        available: true,
        icon: null
    });

    // Set initial mountains
    [13, 28, 31, 55, 77, 97].forEach(index => board[index] = {
        type: "mountain",
        blocked: true,
        available: false,
        icon: null
    });

    // Set initial ruins
    [12, 18, 28, 52, 89, 95, 108].forEach(index => board[index] = {
        type: "ruin",
        blocked: false,
        available: true,
        icon: null
    });

    return board;
};