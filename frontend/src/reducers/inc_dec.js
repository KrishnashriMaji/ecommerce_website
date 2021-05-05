// import { INC_REQUEST, DEC_REQUEST } from "../constants/inc";
const vvv =5;
export const inc_dec = (state = vvv,action) => {
    
    switch(action.type){
        case "INC_REQUEST" :
            console.log(state)
            return  state+action.payload;
        case "DEC_REQUEST" :
            console.log(state)
            return  state+action.payload;
        default :
            return state;
    }
}

