import React,{useState, useContext} from 'react'
import {hy} from './Global'

export const Li = () => {
     
    const {addtrans}= useContext(hy);
    const [firstName, setFirstName] = useState('hye');
    const [firstamount, setFirstamount] = useState(0);

   const onsubmit = e=>{
      e.preventDefault();

const newtrans={
           id: Math.floor(Math.random()*100000000),
            firstName:firstName,
            firstamount: +firstamount
        }    
    addtrans(newtrans);
   } 
   
     
    return (
        <div >
            <form >
            <label>Your Name:   
            <input name="firstName" placeholder="NAME" value={firstName}  onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <br />
            <br />
            <label>Cherity Amount:   
            <input name="firstAmount" placeholder="Amount" value={firstamount} onChange={(e) => setFirstamount(e.target.value)} />
            </label>
            <button onClick={onsubmit} >add transsection</button>
            </form>
         
            
        </div>
    )
}
