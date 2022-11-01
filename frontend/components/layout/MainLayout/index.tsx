import { Center, VStack } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <VStack>
      <Center>
        <VStack
          scrollSnapType="y mandatory"
          position="relative"
          // zIndex="docked"
          spacing={0}
          maxWidth={"924px"}
          minWidth={{
            base: "100%",
            lg: "924px",
          }}
          zIndex={"100"}
        >
          {children}
        </VStack>
      </Center>
    </VStack>
  );
}

export default MainLayout;
