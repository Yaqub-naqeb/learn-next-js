import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-500 flex justify-around py-5 items-center align-middle text-xl font-medium'>
        <h1>logo.</h1>

       <ul className='flex gap-10' >
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
       </ul>
      
    </nav>
  )
}

export default Navbar
