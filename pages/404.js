import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
const NotFound = () => {

const routerr=useRouter();


useEffect(()=>{
  setTimeout(()=>{
    routerr.push('/')
  },3000)
},[])


  return (
   <>
   
   <Head>
    <title>Error page</title>
   </Head>
   
   <div>
      <h1>Oooops...</h1>
      <h2>this page was not found</h2>
     <p>go back to  <Link href={'/'}>Home page</Link></p>
    </div>
   
   </>
  )
}

export default NotFound;
