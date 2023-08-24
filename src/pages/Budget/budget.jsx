import React from 'react'
import Navbar from './Navbar.jsx'
import Middle from './Middle.jsx'

const Budget = () => {
  return (
    <div className="flex"> 
    <div className='mr-2'><Navbar/></div>
    <Middle/>
   
    </div>
  )
}

export default Budget