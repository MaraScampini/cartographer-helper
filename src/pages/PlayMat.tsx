import BasicMap from "../components/BasicMap"
import Coins from "../components/Coins"
import Punctuation from "../components/Punctuation"
import TerrainSelector from "../components/TerrainSelector"

const PlayMat = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <TerrainSelector/>
        <BasicMap/>
        <Coins/>
        <Punctuation/>
    </div>
  )
}

export default PlayMat