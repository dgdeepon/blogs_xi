import React, { useEffect, useState } from 'react'
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
import { getData, updateNow } from '../redux/DataReducer/Action';

function Edit({title,description,id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Values, setValues] = useState({
    title:title,
    description:description
  });

  const dispatch=useDispatch();
  const {reload}=useSelector((store)=>{
    return store.dataReducer;
  });
  const {token}=useSelector((store)=>{
    return store.loginReducer;
  })

  function handleChange(e){
    setValues({...Values,[e.target.name]:e.target.value});
  }

  function updateFun(e){
    e.preventDefault();
    dispatch(updateNow({Values,id,token}));
  }
useEffect(()=>{
    if(reload){
    dispatch(getData(token));
    }
},[reload]);

  return <>
      <Button onClick={onOpen}>
        <FontAwesomeIcon icon={faEdit}/>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay width={'100%'} />
        <Center>

        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={updateFun}>
                <Input mb={'10px'} type='text' onChange={handleChange} name='title' value={Values.title} placeholder='Title'/>
                <Box>
                    <Text height={'300px'} overflow={'auto'}>{Values.description}</Text>
                </Box>
                <Input mb={'10px'} type='text' onChange={handleChange} name='description' value={Values.description} placeholder='Description'/>
            <Button colorScheme='blue' mr={3} width={'100%'} type='submit' onClick={onClose}>
              Update
            </Button>
            </form>
          </ModalBody>
        </ModalContent>
        </Center>
      </Modal>
    </>
}

export default Edit