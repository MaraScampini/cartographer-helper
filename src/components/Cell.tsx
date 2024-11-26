import React from 'react';

interface CellProps {
    x: number;
    y: number;
    available: boolean;
    blocked: boolean;
    backgroundColor: string;
    type: string;
    onClick: () => void;
    icon: JSX.Element | null;
}

const Cell: React.FC<CellProps> = ({ backgroundColor, onClick, blocked, icon }) => {
    return (
        <div
            className={`bg-${backgroundColor} w-8 h-8 md:w-16 md:h-16 flex justify-center items-center border border-dashed border-[#b6a162]`}
            onClick={blocked ? undefined : onClick}
        >
            {icon}
        </div>
    );
};

export default Cell;