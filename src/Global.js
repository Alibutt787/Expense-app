import React, { createContext ,useReducer} from 'react'
import Apreducer from './Apreducer'

const initial={
    trans:[
        {id: 1, text:'flower', amount:200},
        {id: 2 ,text:'red' ,amount:100},
        {id: 3, text:'blue', amount:500}
    ]
} 


export const hy=createContext(initial);

export const Global = ({ children }) => {
 //const [state, setstate] = useState(initial)
 
 const [state, dispatch] = useReducer(Apreducer, initial);
 function deltrans(id){
     dispatch(  { 
         type: 'deltrans',
         payload: id
});}
function addtrans(trans){
    
    dispatch(  { 
        type: 'addtrans',
        payload: trans
});}
    return (
        <>
       <hy.Provider  value={{
           trans:state.trans
           ,deltrans
           ,addtrans}}>
        {children }
        </hy.Provider>
    </>
    )
}
