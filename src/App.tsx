import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlayMat from "./pages/PlayMat"

function App() {

  return (
    <div className="relative min-h-screen bg-ruin">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayMat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
