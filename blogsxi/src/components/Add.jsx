import React, { useEffect, useRef, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
    Input,
    Box,
    Center,
  } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { addNow, getData, updateNow } from '../redux/DataReducer/Action';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

function Add({no}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Values, setValues] = useState({
    title:'',
    description:''
  });
  const [num,setNum]=useState((Math.random()*10000000).toFixed(0));
  const [flag,setFlag]=useState(false);
  const [trigger,setTrigger]=useState({
    debouceTrigger:''
  })
  const dispatch=useDispatch();
  const {token}=useSelector((store)=>{
    return store.loginReducer;
  })
  
  function handleChange(e){
      setValues({...Values,[e.target.name]:e.target.value});
  }


  function debouce(){
    let time;
    return ({title,description,no},token)=>{
        clearTimeout(time);
        time=setTimeout(()=>{
            dispatch(addNow({title:title.trim(),description:description.trim(),no:num},token));
        },1000)
    }
  }

  useEffect(()=>{
    if(!flag){
      setTrigger({...trigger,debouceTrigger:debouce()});
      setFlag(true);
    }else if(flag && Values.description.trim() && Values.title.trim()){
      trigger.debouceTrigger(Values,token);
    }
  },[Values])

  return <>
      <Button onClick={onOpen}>
        <FontAwesomeIcon icon={faAdd}/>
        <span style={{fontWeight:'bold',marginLeft:'5px'}}>ADD</span>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay width={'100%'} />
        <Center>

        <ModalContent>
          <ModalHeader>ADD NEW</ModalHeader>
          <ModalCloseButton onClick={()=>{
            setValues({
                title:'',
                description:'',
              })
              setTrigger({
                debouceTrigger:''
              });
              setFlag(false);
              setNum((Math.random()*10000000).toFixed(0));
          }} />
          <ModalBody>
            <form 
            // onSubmit={updateFun}
            >
                <Input mb={'10px'} type='text' onChange={handleChange} name='title' value={Values.title} placeholder='Title'/>
                <Box>
                    <Text height={'300px'} overflow={'auto'}>{Values.description}</Text>
                </Box>
                <Input mb={'10px'} type='text' onChange={handleChange} name='description' value={Values.description} placeholder='Description'/>
            {/* <Button colorScheme='blue' mr={3} width={'100%'} type='submit' onClick={onClose}>
              ADD
            </Button> */}
            </form>
          </ModalBody>
        </ModalContent>
        </Center>
      </Modal>
    </>
}

export default Add;