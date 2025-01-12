import { useState } from 'react'
import './App.css'
//import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ToGet from './Components/ToGet';
import Create from './Components/Create';
import Update from './Components/Update';
// import Create from './components/Create'
// import Read from './components/Read'
// import Update from './components/Update'
//import {  Routes, Route} from 'react-router-dom'
//import { Link } from 'react-router-dom'
function App() {
  

  return (
    <BrowserRouter>
     <>
        
        <Routes>
          <Route path="/" element={<ToGet/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      
      </>
      </BrowserRouter>
  )
}

export default App
