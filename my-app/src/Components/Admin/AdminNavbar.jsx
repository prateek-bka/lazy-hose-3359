import React from 'react'
import {Link} from "react-router-dom"
const AdminNavbar = () => {
  return (
    <div style={{display:"flex",justifyContent:'space-between',alignItems:"center",margin:'30px',height:"15px",padding:"30px",boxShadow:"rgb(139, 110, 211) 0px 2px 8px 0px"}}>
        <div>
        <Link to="/"><h2 style={{textDecoration:"underline"}}>Home Page</h2> </Link>
        </div>
        <div style={{display:"flex",gap:"35px"}}>
            <Link to="/add-product">
              <button style={{padding:"8px",background:"#008CBA",color:"white",border:"none",borderRadius:"3px"}}>ADD PRODUCT</button>
            </Link>
            <Link  to="/product-list">
              <button style={{padding:"8px",background:"#008CBA",color:"white",border:"none",borderRadius:"3px"}}> PRODUCTS LIST</button>
            </Link>
        </div>
      
      
    </div>
  )
}

export default AdminNavbar