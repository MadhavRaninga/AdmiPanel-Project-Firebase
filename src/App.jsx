import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admipanel from './Admipanel'
import Product from './Product'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admipanel/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App