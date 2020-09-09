import React, { useContext} from 'react'
import {hy} from './Global'
import {Tran} from './Tran'


export const Total = () => {
    const {trans}= useContext(hy);
   const df=trans.map(trans=>trans.amount);
   const tg=df.reduce((acc,item)=>(acc=acc+item));
         
       
return (
        <div>
                 {trans.map(trans=>( <Tran  key={trans.id} trans={trans}/>  ))} 
         
            <h2>Total Cherity</h2>
                  <h3>${tg}</h3>
            <br />
        </div>
    )
}
