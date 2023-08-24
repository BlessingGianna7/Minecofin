import React from 'react'
import Navbar from './components/Navbar.jsx'
import Middle from './components/Middle.jsx'

const App = () => {
  return (
    <div className="flex"> 
    <div className='mr-2'><Navbar/></div>
    <Middle/>
   
    </div>
  )
}

export default App