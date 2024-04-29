// IMPORT ALL PAGES
import Home from './pages/Home.tsx'
import Map from './pages/Map.tsx'
import ContactUs from './pages/Contact.tsx';
import Login from './pages/Login.tsx';

import {useState} from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 const [user, setUserCredentials] = useState(
   {  
     email : 'cyrilnkl5@gmail.com',
     status: 0
    }
 )

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/map' element={<Map />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/login' element={user.email ? <Navigate to="/" replace /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
