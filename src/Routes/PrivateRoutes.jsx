
import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../Pages/Login'

const PrivateRoutes = ({children}) => {
    const isAuth = false

if(isAuth){
    return <Navigate to="/login" element={<Login/>} />
}
  return children;
}

export default PrivateRoutes