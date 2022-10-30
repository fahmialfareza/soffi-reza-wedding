import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box py={"2rem"} textAlign={"center"} backgroundColor={"rgba(255, 245, 245, 0.9)"}>
      <Text className="font-inter" fontWeight={"medium"} color={"grey"} fontSize={{base:"1rem", md:"1.2rem"}}>
        ©2022 alkahfistudio
      </Text>
    </Box>
  );
}

export default Footer;
