import axios from "axios";
import { LOGIN_FAILED, LOGIN_REQ, LOGIN_SUCC, LOGOUT } from "./ActionTypes"



export const LoginNow=(data)=>(dispatch)=>{
    dispatch({type:LOGIN_REQ});
    axios.post(`${process.env.REACT_APP_MAIN_URL}/user/login`,data)
    .then((res)=>{
        // console.log(res);
        dispatch({type:LOGIN_SUCC,payload:res.data.token});
    }).catch((err)=>{
        console.log(err);
        dispatch({type:LOGIN_FAILED})
    })
};

export const logOut=(dispatch)=>{
    dispatch({type:LOGOUT});
}