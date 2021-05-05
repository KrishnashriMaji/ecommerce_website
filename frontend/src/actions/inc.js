
import {
    INC_REQUEST,
    DEC_REQUEST
  } from '../constants/inc';

export  const inc = (num)  => (dispatch,getState) =>{
   
    dispatch({type:INC_REQUEST,payload:num});
        
}

export const dec = () => (dispatch,getState) =>{ 
    dispatch({type:DEC_REQUEST});
    
}
