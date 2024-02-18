// IMPORT ALL PAGES
import Home from './pages/Home.tsx'
import Map from './pages/Map.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/map' element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
