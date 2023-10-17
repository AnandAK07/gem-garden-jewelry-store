import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Products from '../Pages/Products'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Payments from '../Pages/Payments'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pay' element={<Payments/>}/>
    </Routes>
  )
}

export default AllRoutes