import { Box, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Box pb={"2rem"}>
      <Text className="font-inter" fontWeight={"medium"} color={"grey"} fontSize="1.2rem">
        ©2022 alkahfistudio
      </Text>
    </Box>
  );
}

export default Footer;
