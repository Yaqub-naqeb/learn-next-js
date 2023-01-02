import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image'

import Navbar from '../components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  
  <Head>
    <title>Home</title>
  </Head>
  
  <div  className='relative h-[100vh]' >


<Image src='https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
fill


/>


     <h1 className="text-3xl font-bold underline ">
      Home page
    </h1>
    <Link href={'/contactt/contact'}> <a> go to contact</a></Link>
    </div>
  
  </>
  )
}
