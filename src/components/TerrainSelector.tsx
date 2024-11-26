import React, { useState } from "react";
import MonsterSvg from "../assets/MonsterSvg";
import HouseSvg from "../assets/HouseSvg";
import ForestSvg from "../assets/ForestSvg";
import FarmSvg from "../assets/FarmSvg";
import WaterSvg from "../assets/WaterSvg";

interface OnClickProps {
    terrain: string,
    svg: JSX.Element
}

interface TerrainSelectorProps {
    onClick: (props: OnClickProps) => void
}
const TerrainSelector: React.FC<TerrainSelectorProps> = ({ onClick }) => {

    const [selectedTerrain, setSelectedTerrain] = useState<string | null>(null);
    const terrains = {
        "houses": <HouseSvg/>,
        "water": <WaterSvg/>,
        "farm": <FarmSvg/>,
        "forest": <ForestSvg/>,
        "monster": <MonsterSvg/>
    };

    const handleClick = (terrain: string, svg: JSX.Element) => {
        setSelectedTerrain(terrain); 
        onClick({ terrain, svg }); 
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <p className="font-klee font-semibold text-xl">select terrain</p>
            <div className="m-3 flex gap-3">
                {Object.entries(terrains).map(([terrain, svg]) => (
                    <div key={terrain}
                        onClick={() => handleClick(terrain, svg)}
                        className={`h-12 w-12 md:h-20 md:w-20 rounded-md bg-${terrain} flex justify-center items-center hover:cursor-grab ${selectedTerrain === terrain ? 'shadow-[inset_2px_2px_1px_1px_rgba(0,_0,_0,_0.2)] border-b border-r border-white' : ''}`}>
                        {React.cloneElement(svg, { stroke: "#6c6c6c" })}
                    </div>
                ))
                }
            </div >
        </div>
    )
}

export default TerrainSelector