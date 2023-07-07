import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PrivateRoutes({children}) {

    const {token}=useSelector((store)=>{
        return store.loginReducer;
    })

  return (
    token ? children : <Navigate to={'/signin'}/>
  )
}

export default PrivateRoutes