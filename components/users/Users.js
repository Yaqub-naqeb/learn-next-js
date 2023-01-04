
// export const getStaticProps=async()=>{

import { useEffect, useState } from "react";

//     const res=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data=await res.json();
    
    
//     return {
//         props:{nin:data}
//     }
    
//     }
  
  
const Users = ({nin}) => {

const [data,setData]=useState();
    useEffect(()=>{

const getsmth=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    setData(data)
    
    
}
getsmth();

    },[])

    console.log(data);






    console.log(nin);
  return (
    <div>
      
<div>
  {data&&data.map((n)=>(
    <div key={n.id}>{n.name}</div>
  ))}
</div>

    </div>
  )
}

export default Users
