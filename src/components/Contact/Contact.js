import React from "react";
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
  Textarea
} from "@chakra-ui/react";
import { useState } from "react";

function Contact() {
  const [isAttend, setIsAttend] = useState('yes');
  return (
    <Box border="1px" borderColor="gray.200" p={4} m={1}>
      <Text fontSize="20px" mb={2} color='blue.600'>
        Contact Information
      </Text>
      <FormControl display="flex">
        <Box width="70%">
          <Flex wrap="wrap" gap={4}>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">First Name</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder="Enter First Name" />
              {/* <FormHelperText fontSize="xs">First Name</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Last Name</FormLabel>
              <Input type="text" size="xs" fontSize="xs" placeholder="Enter Last Name" />
              {/* <FormHelperText fontSize="xs">Last Name</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Birth Date</FormLabel>
              <Input type="date" size="xs" fontSize="xs" />
              {/* <FormHelperText fontSize="xs">Date</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Email Address</FormLabel>
              <Input
                type="email"
                placeholder="ex:myname@example.com"
                size="xs"
                fontSize="xs"
              />
              {/* <FormHelperText fontSize="xs">example@example.com</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Occupation</FormLabel>
              <Input type="email" placeholder="Enter Occupation" size="xs" fontSize='xs'/>
              {/* <FormHelperText fontSize="xs">Occupation Name</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Business</FormLabel>
              <Input
                type="email"
                placeholder="Enter Business"
                size="xs"
                fontSize="xs"
              />
              {/* <FormHelperText fontSize="xs">Business Name</FormHelperText> */}
            </Box>
            <Box flex="1 1 30%">
              <FormLabel fontSize="xs">Organization / Membership</FormLabel>
              <Input type="email" w="30%" size="xs" fontSize="xs" placeholder="Enter Organization Name" />
              {/* <FormHelperText>Business Name</FormHelperText> */}
            </Box>
          </Flex>
        </Box>
        <Box w="26%" ml={10} mt={1} style={{display:'flex',flexDirection:'column'}} >
          <FormLabel fontSize="xs">
            Have you attended this training before?
          </FormLabel>

          <RadioGroup onChange={setIsAttend}>
            <Stack direction={["column", "row"]} spacing={[4,20]}>
              <Radio value="yes" fontSize="xs">
                Yes
              </Radio>

              <Radio value="no" fontSize="xs">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        
        {isAttend === "yes" && (
          <Box mt={1}>
            <FormLabel fontSize="xs">If Yes, When?</FormLabel>
            <Input type="text" size="xs" fontSize="xs" />
          </Box>
        )}
         <Box mt={4}>
        <FormLabel fontSize="xs">Reason(s) for ateending this meeting </FormLabel>
        <Textarea placeholder='Type here...' />
        </Box>
        </Box>
       
      </FormControl>
    </Box>
  );
}

export default Contact;
