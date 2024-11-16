import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlayMat from "./pages/PlayMat"

function App() {

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PlayMat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
