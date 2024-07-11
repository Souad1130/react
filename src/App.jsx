import React from 'react'

import './App.css'
//import Home from 'pages/Home'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>


        
      </Routes>
    </BrowserRouter>

      
    
  )
}

export default App
