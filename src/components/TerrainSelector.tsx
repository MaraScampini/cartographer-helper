import React from "react";

const TerrainSelector = ({onClick}) => {
    const terrains = {
        "houses": <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>,
        "water": <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-ripple">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
            <path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
            <path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
        </svg>,
        "farm": <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-small">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 3h16" />
            <path d="M4 9h16" />
            <path d="M4 15h16" />
            <path d="M4 21h16" />
        </svg>,
        "forest": <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trees">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
            <path d="M15 21l0 -3" />
            <path d="M8 13l-2 -2" />
            <path d="M8 12l2 -2" />
            <path d="M8 21v-13" />
            <path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
        </svg>,
        "monster": <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bomb">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15.349 5.349l3.301 3.301a1.2 1.2 0 0 1 0 1.698l-.972 .972a7.5 7.5 0 1 1 -5 -5l.972 -.972a1.2 1.2 0 0 1 1.698 0z" />
            <path d="M17 7l1.293 -1.293a2.414 2.414 0 0 0 .707 -1.707a1 1 0 0 1 1 -1h1" />
            <path d="M7 13a3 3 0 0 1 3 -3" />
        </svg>
    };


    return (
        <div className="m-3 flex gap-2">
            {Object.entries(terrains).map(([terrain,svg]) => (
                <div onClick={() => onClick({terrain, svg})} className={`h-20 w-20 bg-${terrain} flex justify-center items-center`}>
                    {React.cloneElement(svg, {stroke: "white"})}
                </div>
            ))}
        </div>
    )
}

export default TerrainSelector