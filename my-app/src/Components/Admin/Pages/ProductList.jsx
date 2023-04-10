import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../ProductCard'
import { getProduct } from '../api'
import AdminNavbar from '../AdminNavbar'
import './cart.css'
const ProductList = () => {
  const [data,setData]=useState([])  
  const [change,setChange]=useState(false)
  const handleChange=()=>{
        setChange((prev)=>!prev)
  } 
  useEffect(()=>{
     getProduct().then((res)=>setData(res)) 
  },[change])

  return (
       <>
       <AdminNavbar/>
        <div className='cart-1' >
          {data.length>0 && data.map((ele)=>(
            <ProductCard key={ele.id} {...ele} handleChange={handleChange}/>
          ))}   
    </div>
       </>
    
  )
}

export default ProductList