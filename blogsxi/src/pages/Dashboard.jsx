import { Box, Button, Table, Tbody, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData, deleteNow } from '../redux/DataReducer/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import View from '../components/View';
import Edit from '../components/Edit';
import Navbar from '../components/Navbar';

function Dashboard() {

  // redux properties
  const dispatch=useDispatch();
  const {data,reload}=useSelector((store)=>{
    return store.dataReducer;
  });
  const {token}=useSelector((store)=>{
    return store.loginReducer;
  })

  useEffect(()=>{
      dispatch(getData(token))
  },[reload])

  return (
    <Box>
      <Navbar/>
      <Box>
        <Box>
          <Table width={'80%'} margin={'auto'}  boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>View</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
        {data?.map((el,i)=>{
          return <Tr key={i}>
          <Th>{el.title}</Th>
          <Th>
            <View description={el.description} title={el.title}/>
          </Th>
          <Th>
            <Edit title={el.title} description={el.description} id={el._id}/>
          </Th>
          <Th><Button onClick={()=>{
            dispatch(deleteNow(el._id,token));
          }}>
            <FontAwesomeIcon icon={faTrash}/>
            </Button></Th>
          </Tr>
        })}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  )
}

export default Dashboard