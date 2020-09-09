 export default (state, action)=>{
    switch(action.type){
        case 'deltrans':
        return {
            ...state, trans: state.trans.filter(trans=>trans.id!==action.payload)
        }
        case 'addtrans':
        return {
         ...state ,   
        trans:[action.payload,...state.trans] 
          
        }
        default :
        return state; 
    }
}
