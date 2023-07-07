import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
  } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


function View({description,title}) {
  return (
  <Popover>
  <PopoverTrigger>
    <Button>
        <FontAwesomeIcon icon={faEye}/>
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>{title}</PopoverHeader>
    <PopoverBody height={'300px'} width={'100%'} overflow={'auto'}>{description}</PopoverBody>
  </PopoverContent>
</Popover>
  )
}

export default View