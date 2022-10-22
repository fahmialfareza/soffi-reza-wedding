import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Hero() {
  return (
    <Box>
      <Box position={"absolute"} left={0} height={"100%"}>
        <Image
          src={"/assets/flower-left.png"}
          width={"100%"}
          alt={"hero-flower"}
        ></Image>
      </Box>
      <Box position={"absolute"} right={0} height={"100%"}>
        <Image
          src={"/assets/flower-right.png"}
          width={"100%"}
          alt={"hero-flower"}
        ></Image>
      </Box>
      <VStack height={"80vh"} align={"center"} justifyContent={"center"} gap={"3rem"} mt={"10vh"}>
        <Text fontSize={"6xl"} className={"font-pacifio"} color={"grey"}>
          The Wedding Of
        </Text>
        <Image src="/assets/bride.png" alt="mempelai" />
        <HStack spacing={"1.5rem"}>
          <Text className={"font-inter"} color={"grey"} fontSize={"3.25rem"}>JAN </Text>
          <Text className={"font-inter"} color={"grey"} fontSize={"6rem"} fontWeight={"bold"}>14</Text>
          <Text className={"font-inter"} color={"grey"} fontSize={"3.25rem"}>2023</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Hero;
