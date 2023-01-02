import Head from 'next/head'
import { Inter } from '@next/font/google'

import Navbar from '../components/Navbar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<>
  
  <Head>
    <title>Home</title>
  </Head>
  
  <div  >
     <h1 className="text-3xl font-bold underline ">
      Home page
    </h1>
    <Link href={'/contactt/contact'}> <a> go to contact</a></Link>
    </div>
  
  </>
  )
}
