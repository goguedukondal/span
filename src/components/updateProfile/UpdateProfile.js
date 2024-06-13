import React from "react";
import "./UpdateProfile.css";
import { Box, Text, Flex, Spacer, Button, Checkbox } from "@chakra-ui/react";
import { color } from "framer-motion";
function UpdateProfile() {
  const buttonStyle = {
    fontSize: "xs",
    mb: 1,
    color: "white",
    bg: "blue.500",
  };

  return (
    <Flex p={1} border="2px" borderColor="gray.200">
      <Text
        color="brown.800"
        fontSize="18px"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      
      >
        Training Registration
      </Text>

      <Spacer />

      <Button sx={buttonStyle} mr={1} >
        Use Template
      </Button>
    </Flex>
  );
}

export default UpdateProfile;
