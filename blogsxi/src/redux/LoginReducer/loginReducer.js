import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCC, LOGOUT } from "./ActionTypes";


const init={
    token:'',
    isLoading:false,
    isError:false
};

export default function loginReducer(state=init,action){
    switch (action.type) {
        case LOGIN_REQ:
        return {
            ...state,
            isLoading:true,
            isError:false,
            token:''
        } 
        case LOGIN_SUCC:
            return{
                ...state,
                isLoading:false,
                isError:false,
                token:action.payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                isLoading:false,
                isError:true,
                token:''
            }   
        case LOGOUT:
            return{
                ...state,
                token:''
            }     
        default:
            return state;
    }
}