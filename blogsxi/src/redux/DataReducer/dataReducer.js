import { DATA_FAILED, DATA_REQ, DATA_SUCC, DATA_UPATE_FAILED, DATA_UPATE_REQ, DATA_UPATE_SUCC} from "./ActionTypes";


const init={
    data:[],
    isLoading:false,
    isError:false,
    reload:false
};

export default function dataReducer(state=init,action){
    switch (action.type) {
        case DATA_REQ:
        return {
            ...state,
            isLoading:true,
            isError:false,
            data:[],
            reload:false
        } 
        case DATA_SUCC:
            return{
                ...state,
                isLoading:false,
                isError:false,
                data:action.payload,
                reload:false
            }
        case DATA_FAILED:
            return {
                ...state,
                isLoading:false,
                isError:true,
                data:[],
                reload:false
            }   
        case DATA_UPATE_REQ:
            return {
                ...state,
                isLoading:true,
                isError:false,
                reload:false
            }  
        case DATA_UPATE_SUCC:
            return{
                ...state,
                isLoading:false,
                isError:false,
                reload:action.payload
            }       
        case DATA_UPATE_FAILED:
            return{
                ...state,
                isLoading:false,
                isError:true,
                reload:false
            }    
        default:
            return state;
    }
}