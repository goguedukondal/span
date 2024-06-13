import React from 'react'
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
function Form() {
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
  return (
    <Box>
        <FormControl>
        <Flex wrap='wrap' gap={4}>
        <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Adress</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder='Enter Your Adress' />
              {/* <FormHelperText fontSize="xs">Street</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs" >Street Adress Line 2</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder='Enter street number'/>
              {/* <FormHelperText fontSize="xs">Street Adress Line 2</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs" >Land Mark</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder='Enter Land Mark' />
              {/* <FormHelperText fontSize="xs">Street Adress Line 2</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">City</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder='Enter City Name' />
              {/* <FormHelperText fontSize="xs">First Name</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">State / Province</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder='Enter State Name' />
              {/* <FormHelperText fontSize="xs">First Name</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Postal / Zip Code</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder='Enter Postal / Zip Code' />
              {/* <FormHelperText fontSize="xs">First Name</FormHelperText> */}
            </Box>
        </Flex>
        
       </FormControl>
       
    </Box>
  )
}

export default Form