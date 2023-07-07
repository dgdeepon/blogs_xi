import axios from "axios";
import { REGISTER_FAILED, REGISTER_REQ, REGISTER_SUCC } from "./ActionTypes";



export const RegisterNow=(data)=>(dispatch)=>{
    dispatch({type:REGISTER_REQ});
    axios.post(`${process.env.REACT_APP_MAIN_URL}/user/register`,data)
    .then((res)=>{
        // console.log(res);
        dispatch({type:REGISTER_SUCC,payload:true});
    }).catch((err)=>{
        dispatch({type:REGISTER_FAILED})
    })
}