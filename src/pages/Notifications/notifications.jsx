import React from 'react'
import Navbar from './navbar.jsx'
import Middle from './middle.jsx'

const Notifications = () => {
  return (
    <div className="flex"> 
    <div className='mr-2'><Navbar/></div>
    <Middle/>
   
    </div>
  )
}

export default Notifications