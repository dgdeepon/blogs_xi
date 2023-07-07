import { REGISTER_FAILED, REGISTER_REQ, REGISTER_SUCC } from "./ActionTypes";


const init={
    registerd:false,
    isLoading:false,
    isError:false
};

export default function registerReducer(state=init,action){
    switch (action.type) {
        case REGISTER_REQ:
        return {
            ...state,
            isLoading:true,
            isError:false,
            registerd:false
        } 
        case REGISTER_SUCC:
            return{
                ...state,
                isLoading:false,
                isError:false,
                registerd:action.payload
            }
        case REGISTER_FAILED:
            return {
                ...state,
                isLoading:false,
                isError:true,
                registerd:false
            }    
        default:
            return state;
    }
}