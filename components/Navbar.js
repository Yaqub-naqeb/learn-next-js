import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-slate-500 flex justify-around py-5 items-center align-middle text-xl font-medium'>
        <h1>logo.</h1>

       <ul className='flex gap-10' >
       <Link href={'/'}> <li><a >Home</a></li></Link>
       <Link href={'/aboutt'}>        <li><a >About</a></li>
</Link>
<Link href={'/contactt/contact'}><li><a >Contact</a></li>
</Link>
       </ul>
      
    </nav>
  )
}

export default Navbar
