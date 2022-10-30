import React from 'react'
import {
  ChakraProvider,
  Box,
  HStack,
  Image,
  Tag,
  Container,
  VStack
} from "@chakra-ui/react";

const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80",
  "https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1559&q=80",
  "https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

function testsnap() {
  return (
        <Box w="full" bg="gray.50" h="100vh">
      <Container maxW="4xl" centerContent position="relative" pt={24}>
        <VStack
          w="full"
          pb={24}
          px={80}
        //   overflowY="auto"
          spacing={8}
          scrollSnapType="y mandatory"
          position="relative"
          zIndex="docked"
        >
          {images.map((src) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <Image
              key={src}
              src={src}
              rounded="md"
              shadow="lg"
              h={"100vh"}
              scrollSnapAlign="center"
              maxWidth="initial"
            />
          ))}
        </VStack>
        <Box
          w="1px"
          h="full"
          bg="teal.500"
          position="absolute"
          top={0}
          left="50%"
          right="50%"
          zIndex="base"
        />
        <Tag colorScheme="teal" position="absolute" top={10} left="51%">
          Snap Point
        </Tag>
      </Container>
    </Box>
  )
}

export default testsnap