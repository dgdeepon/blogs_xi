import axios from "axios";
import { DATA_ADD_REQ, DATA_DELETE_REQ, DATA_DELETE_SUCC, DATA_FAILED, DATA_REQ, DATA_SUCC, DATA_UPATE_FAILED, DATA_UPATE_REQ, DATA_UPATE_SUCC } from "./ActionTypes"



export const getData=(token)=>(dispatch)=>{
    dispatch({type:DATA_REQ});
    axios.get(`${process.env.REACT_APP_MAIN_URL}/blog`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log(res);
        dispatch({type:DATA_SUCC,payload:res.data});
    }).catch((err)=>{
        console.log(err);
        dispatch({type:DATA_FAILED})
    })
};

export const updateNow=({Values,id,token})=>(dispatch)=>{
    dispatch({type:DATA_UPATE_REQ});

    axios.patch(`${process.env.REACT_APP_MAIN_URL}/blog/update/${id}`,Values,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        dispatch({type:DATA_UPATE_SUCC,payload:true})
    }).catch((err)=>{
        dispatch({type:DATA_UPATE_FAILED});
    })
};


export const deleteNow=(id,token)=>(dispatch)=>{
    dispatch({type:DATA_UPATE_REQ});
    axios.delete(`${process.env.REACT_APP_MAIN_URL}/blog/delete/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        dispatch({type:DATA_UPATE_SUCC,payload:true});
    }).catch((err)=>{
        dispatch({type:DATA_UPATE_FAILED});
    })
};

export const addNow=(data,token)=>(dispatch)=>{
    dispatch({type:DATA_UPATE_REQ});
    axios.patch(`${process.env.REACT_APP_MAIN_URL}/blog/autoSave`,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((res)=>{
        dispatch({type:DATA_UPATE_SUCC,payload:true})
    }).catch((err)=>{
        dispatch({type:DATA_UPATE_FAILED});
    })
}