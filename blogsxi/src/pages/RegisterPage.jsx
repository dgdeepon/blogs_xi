import { Box, Button, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RegisterNow } from '../redux/RegisterReducer/Action';
import { Navigate,Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RegisterPage() {
    const [inputVal, setinputVal] = useState({
        name:'',
        email:'',
        password:''
    })

    // redux properties
    const dispatch=useDispatch();
    const {isLoading,registerd}=useSelector((store)=>{
        return store.registerReducer;
    })

    // input value handle
    function handleChange(e){
        setinputVal({...inputVal,[e.target.name]:e.target.value});
    }

    // submit function
    function submitNow(e){
        e.preventDefault();
        dispatch(RegisterNow(inputVal));
    }


    if(registerd){
       return <Navigate to={'/signin'}/>
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
        <Text fontWeight={'bold'} fontSize={'4xl'} color={'#605ab4'} marginBottom={'10px'}>Register</Text>
        <form onSubmit={submitNow}>
        <Input p={'25px'} marginBottom={'10px'} type='text' name='name' onChange={handleChange} placeholder='Name' isRequired/>
        <Input p={'25px'} marginBottom={'10px'} type='email' name='email' onChange={handleChange} placeholder='Email' isRequired/>
        <Input p={'25px'} marginBottom={'10px'} type='password' name='password' onChange={handleChange} placeholder='Password' isRequired/>
        <Button type='submit' bgColor={'#f553b8'} color={'white'} width={'100%'}>{isLoading? <Spinner/> : 'Sign Up'}</Button>
        </form>
        <Text>Sign in your account<Link to={'/signin'}> <Text display={'inline'} color={'#605ab4'} fontWeight={'bold'} >Sign In</Text></Link></Text>
        </Box>
        </VStack>
  )
}

export default RegisterPage