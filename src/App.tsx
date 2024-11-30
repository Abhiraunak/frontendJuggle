// import { useState } from 'react'
// import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/landing";
import Signin from './Pages/signin';
import Signup from './Pages/signup';
import Prop from './Pages/propDrilling';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/prop" element={<Prop />} />
      </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
