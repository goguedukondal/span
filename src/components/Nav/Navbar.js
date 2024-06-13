import React from 'react'
import './Navbar.css'
import { Flex, Spacer,Button,Box,Heading,ButtonGroup,Text } from '@chakra-ui/react'
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
function Navbar() {
  return (
    <Box mt={1} border='1px' borderColor='gray.200' p={1}>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='x-large' fontSize='x-large' color='blue.600'>Training Registration</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    {/* <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button> */}
    <Text color='blue.500' fontSize='14px' fontFamily="Arial, sans-serif" fontWeight="bold">Support</Text>
    <FaUserCircle size={20} />
    <Text fontSize='14px' color='gray.600'>User</Text>
    <IoIosArrowDropdownCircle size={20}  color='blue'/>
  </ButtonGroup>
</Flex>
    </Box>
  )
}

export default Navbar