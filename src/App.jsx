import { useState } from 'react'
import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Forms from "./Components/Forms"
import FormPage from "./Components/Formpage"

import './App.css'

function App() {
  return (
   
     <>
    
      <Routes>
        <Route path="/Forms" element={<Forms />} />
        <Route path="/FormPage" element={<FormPage />} />
        
      </Routes>
    </>
   
   
   
  )
}

export default App
