import React from 'react'
import { FiThumbsUp,FiThumbsDown,FiTrash2 } from "react-icons/fi";
import { deleteData, updateDislike, updateLike } from './api';
const ProductCard = ({id,name,like,dislike,img,price,brand,handleChange}) => {
  const handleDelete=()=>{
      deleteData(id).then(()=>handleChange())
  }
  const handleLike=()=>{
          updateLike(id).then(()=>handleChange())    
  }
  const handleDislike=()=>{
    updateDislike(id).then(()=>handleChange())
  }
  return (
    <div style={{textAlign:"center",boxShadow:"rgb(19, 243, 93) 0px 2px 8px 0px",width:"90%"}}>
        <img src={img} alt="" width="100%" height="200px"/>
         <p style={{marginTop:"0px"}}>{name}</p>
         <div style={{display:"flex",gap:"10px",justifyContent:"center",marginTop:"-30px"}}>
         <p>Brand:{brand}</p>
         <p>Price: {price}</p>
         </div>
         <div style={{display:"flex",gap:"30px",width:"100%",margin:"auto",justifyContent:"center",marginTop:"-10px",padding:"6px",marginBottom:"5px"}}>
         <button  onClick={handleLike} style={{padding:"4px",background:"#008CBA",color:"white",border:"none",borderRadius:"3px"}}><FiThumbsUp/>  {like}</button>
         <button onClick={handleDislike} style={{padding:"4px",background:"#008CBA",color:"white",border:"none",borderRadius:"3px"}}><FiThumbsDown/>  {dislike}</button>
         <button onClick={handleDelete} style={{padding:"4px",background:"#008CBA",color:"white",border:"none",borderRadius:"3px"}}><FiTrash2/></button> 
         </div>
    </div>
  )
}

export default ProductCard