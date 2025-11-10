import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

function Home() {
    return <h1>This is my homepage</h1>
}
function AboutUs() {
    return <h1>This is the about page</h1>
}

export default function Link1() {
  return (
    <div>
        <nav>
            <Link to ='/'>Home</Link>
            <Link to ='/about'>About Us</Link>
        </nav>
        <Routes>
            <Route path='/' element = { <Home /> }/>
            <Route path='/about' element = { <AboutUs />}/>
        </Routes>
    </div>
  )
}