import { useState } from "react"
import BasicMap from "../components/BasicMap"
import Coins from "../components/Coins"
import Punctuation from "../components/Punctuation"
import TerrainSelector from "../components/TerrainSelector"

interface TerrainProps {
    terrain: string;
    svg: JSX.Element
}
const PlayMat = () => {
    const [terrain, setTerrain] = useState("");
    const [svg, setSvg] = useState<JSX.Element | null>(null);

    const handleChangeTerrainType = ({terrain, svg}: TerrainProps) => {
        setTerrain(terrain);
        setSvg(svg);
    }
  return (
    <div className="flex flex-col justify-center items-center">
        <TerrainSelector onClick={handleChangeTerrainType}/>
        <BasicMap terrain={terrain} icon={svg}/>
        <Coins/>
        <Punctuation/>
    </div>
  )
}

export default PlayMat