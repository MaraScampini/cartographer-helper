// types.ts
export interface CellState {
    type: string;
    blocked: boolean;
    available: boolean;
    icon: JSX.Element | null;
  }
  
  export interface BasicMapProps {
    terrain: string;
    icon: JSX.Element | null;
    boardType: string;
  }