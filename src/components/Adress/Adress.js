import React from 'react'
import './Adress.css'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Box,
  Text,
  Flex,
  Checkbox,
  Spacer,
  RadioGroup,
  Radio,
  Stack,
  Textarea,
  Button,
  position
} from "@chakra-ui/react";
import Form from '../Form/Form';
import { useState } from 'react';
function Adrees() {
  const [forms,setForms] = useState([]);

  const buttonStyle = {
    fontSize: "xs",
    mb: 1,
    color: "white",
    bg: "blue.500",
    position:'relative',
    bottom:'2px',
    right:'2px',
    mt:'20px'
  };
  
  const addForms =()=>{
    setForms([...forms,<Form/>])
  }

  return (
    <Box  border="1px" borderColor="gray.200" p={4} m={1} sx={{position:'relative'}}>
      <Text fontSize='20px' color='blue.600'>Adress Information</Text>
      <Flex justifyContent='flex-end'>
       <Button sx={buttonStyle} mr={1} onClick={addForms}>
       ADD
      </Button >
       </Flex>
       <Form/>
       {forms.length>0&&forms.map((form)=>{
        return <Box mt={2}>{form}
        
        </Box>
       })}
       <Flex justifyContent='flex-end'>
       <Button sx={buttonStyle} mr={1} >
       Next
      </Button >
       </Flex>
    </Box>
  )
}

export default Adrees