import { Box, Center, Container, Image, VStack } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <VStack>
      <Box
        backgroundColor={"background"}
        width="100%"
        height={"100vh"}
        position={"relative"}
        overflow={"hidden"}
      >
        <Box
          height={"100%"}
          backgroundRepeat={"no-repeat"}
          position={"absolute"}
          top={"0"}
          left={"0"}
        >
          <Image
            width={{
              md: "480px",
              sm: "100%",
            }}
            src={"./assets/bg-up-left.png"}
            alt={"bg-up-left"}
          ></Image>
        </Box>
        <Box
          height={"100%"}
          backgroundRepeat={"no-repeat"}
          position={"absolute"}
          top={"0"}
          right={"0"}
        >
          <Image
            width={{
              md: "480px",
              sm: "100%",
            }}
            src={"./assets/bg-up-right.png"}
            alt={"bg-up-left"}
          ></Image>
        </Box>
        <Container
          maxW={"924px"}
          maxH={"100vh"}
          minH={"100vh"}
          mx={0}
          px={0}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          zIndex={1}
          position={"absolute"}
          backgroundColor={"rgba(255, 245, 245, 0.9)"}
          overflowY={"scroll"}
          sx={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          <VStack width={"100%"} maxH={"100vh"} scrollSnapType="y mandatory" gap={"2rem"}>
            {children}
          </VStack>
        </Container>
        <Box
          backgroundRepeat={"no-repeat"}
          position={"absolute"}
          bottom={"-390"}
          left={"0"}
        >
          <Image
            width={{
              sm: "100%",
            }}
            src={"./assets/bg-down-left.png"}
            alt={"bg-up-left"}
          ></Image>
        </Box>
        <Box
          backgroundRepeat={"no-repeat"}
          position={"absolute"}
          bottom={"-300"}
          right={"0"}
        >
          <Image
            width={{
              sm: "100%",
            }}
            src={"./assets/bg-down-right.png"}
            alt={"bg-up-left"}
          ></Image>
        </Box>
      </Box>
    </VStack>
  );
}

export default MainLayout;
