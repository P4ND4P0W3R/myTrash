// IMPORT ALL PAGES
import Home from './pages/Home.tsx'
import Map from './pages/Map.tsx'
import ContactUs from './pages/Contact.tsx';
import Login from './pages/Login.tsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
