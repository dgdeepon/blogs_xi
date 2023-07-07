import { Box, Button, HStack } from '@chakra-ui/react'
import { faAdd, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Add from './Add'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/LoginReducer/Action'

function Navbar() {

  const {token}=useSelector((store)=>{
    return store.loginReducer;
  })
  const dispatch=useDispatch();

  const {data}=useSelector((store)=>{
    return store.dataReducer;
  })

  
  if(!token){
    return <Navigate to={'/signin'}/>
  }

  return (
    <HStack p={'25px'} justifyContent={'space-between'} w={'100%'}>
            <Add no={data?.length}/>
            <Button onClick={()=>{
              dispatch(logOut);
            }}>
              <FontAwesomeIcon icon={faSignOut}/>
            </Button>
    </HStack>
  )
}

export default Navbar