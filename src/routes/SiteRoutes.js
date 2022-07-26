import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "../views/Dashboard"
import Edit from "../views/Edit"
import Login from '../views/Login'

export default function SiteRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/404' element={<div>404</div>} /> 
          <Route path='/edit/:username' element={<Edit />}/>
          <Route path='/:username' element={<Dashboard />} />
          <Route path='/' element={<Login />} /> 
          <Route path='*' element={<div>404</div>} /> 
        </Routes>
      </BrowserRouter>
  )
}
    