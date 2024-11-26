// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from './Pages/signin';
import Signup from './Pages/signup';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
