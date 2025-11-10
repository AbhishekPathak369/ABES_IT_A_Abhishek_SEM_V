import Book from './Components/Book.jsx'
import './App.css'
import Navbar from './Components/navbar.jsx'


function App() {


  return (
    <>
    <Navbar />
    <div className='App'>
   
      <Book />
      <br />
      
      <Book />
      <br />
      <Book />
      </div>
    </>
  )
}

export default App
