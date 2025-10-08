import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admipanel from './Admipanel'
import Product from './Product'
import Signup from './Signup'
import Signin from './Signin'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/admin' element={<Admipanel/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App