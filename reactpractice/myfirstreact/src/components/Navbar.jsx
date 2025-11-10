import React from 'react'
import './Navbar.css'

function Navbar(){
  return (
    <>
    <div id="nav">
    <Link name='\' href='home' >Home</Link>
    <Link name='\about' href='about'>About Us</Link>
    <Link name='\contact' href='contact'>Contact</Link>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <a href=""></a>
    <Link name='\signup' href='signup'>SignUp</Link>
    <Link name='\login' href='login'>Login</Link>
    </div>
    </>
  )
}
export default Navbar;