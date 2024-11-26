export interface CellState {
    background: string;
    blocked: boolean;
    available: boolean;
    icon: JSX.Element | null;
    type: string;
  }
  
  export interface BasicMapProps {
    terrain: string;
    icon: JSX.Element | null;
    boardType: string;
  }