import { Box, Button, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { LoginNow } from '../redux/LoginReducer/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LoginPage() {
    const [inputVal, setinputVal] = useState({
        email:'',
        password:''
    })

    // redux properties
    const dispatch=useDispatch();
    const {token,isLoading}=useSelector((store)=>{
        return store.loginReducer;
    })
    
    // input value handle
    function handleChange(e){
        setinputVal({...inputVal,[e.target.name]:e.target.value});
    }

    // submit function
    function submitNow(e){
        e.preventDefault();
        dispatch(LoginNow(inputVal));
    }

    if(token){
        return <Navigate to={'/dashboard'}/>
    }

  return (
        <VStack justifyContent={'center'}  height={'100vh'} p={'30px'}>
        <Link to={'/'}>
    <Text fontWeight={'bold'} color={'#605ab4'} fontSize={'xl'}>
        <FontAwesomeIcon icon={faArrowLeft}/>
        <span style={{marginLeft:'10px'}}>Back to home</span>
    </Text>
        </Link>
        <Box  boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'} w={'500px'} m={'auto'} p={'25px'} borderRadius={'10px'} >
        <Text fontWeight={'bold'} fontSize={'4xl'} color={'#605ab4'} marginBottom={'10px'}>Login</Text>
        <form onSubmit={submitNow}>
        <Input p={'25px'} marginBottom={'10px'} type='email' name='email' onChange={handleChange} placeholder='Email' isRequired/>
        <Input p={'25px'} marginBottom={'10px'} type='password' name='password' onChange={handleChange} placeholder='Password' isRequired/>
        <Button type='submit' bgColor={'#f553b8'} color={'white'} width={'100%'}>{isLoading? <Spinner/> :'Sign In'}</Button>
        </form>
        <Text>Create your account <Link to={'/signup'}> <Text display={'inline'} color={'#605ab4'} fontWeight={'bold'} >Sign Up</Text></Link></Text>
        </Box>
        </VStack>
  )
}

export default LoginPage