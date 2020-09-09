import React,{useContext} from 'react'
import {hy} from './Global'

 export const Tran = ({trans}) => {
  
    const {deltrans} = useContext(hy);
    
  
    return (
        <div>
            
    <p>cherity {trans.text} by of  {trans.amount}</p> <button onClick={()=>deltrans(trans.id)}>X</button> 
         
            
        </div>
    )
}
