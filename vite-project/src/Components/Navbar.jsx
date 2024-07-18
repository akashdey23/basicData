import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import AddProduct from '../Components/AddProduct'
import { textDecoration } from '@chakra-ui/react'


const Navbar = () => {
  return (
    <div>
       <nav>
        <button><Link to='/'>Home</Link></button>{" "}
        <button><Link to='/AddProduct'>AddProduct</Link></button>{" "}
        <button><Link to='/Login'>Login</Link></button>{" "}
        <button><Link to='/Cart'>Cart</Link></button>{" "}
      </nav>
    </div>
  )
}

export default Navbar
