import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import InvitationType from "../../interfaces/type.interface";

interface HeroProps {
  type: InvitationType;
}

function Hero({ type }: HeroProps) {
  return (
    <Box scrollSnapAlign="center" width={"100%"}>
      <Box position={"absolute"} left={0}>
        <Image
          src={"/assets/flower-left.png"}
          width={{
            base: "50%",
            md: "100%",
          }}
          alt={"hero-flower"}
        ></Image>
      </Box>
      <Box
        position={"absolute"}
        display={"flex"}
        right={0}
        justifyContent={"flex-end"}
      >
        <Image
          src={"/assets/flower-right.png"}
          width={{
            base: "50%",
            md: "100%",
          }}
          alt={"hero-flower"}
        ></Image>
      </Box>
      <VStack
        height={"100vh"}
        align={"center"}
        justifyContent={"center"}
        gap={"3rem"}
      >
        <Text
          fontSize={{
            base: "4xl",
            md: "6xl",
          }}
          className={"font-pacifio"}
          color={"grey"}
        >
          The Wedding Of
        </Text>
        <Image src="/assets/bride.png" alt="mempelai" />
        <HStack spacing={"1.5rem"}>
          <Text
            className={"font-inter"}
            color={"grey"}
            fontSize={{
              base: "2rem",
              md: "3.25rem",
            }}
          >
            JAN{" "}
          </Text>
          <Text
            className={"font-inter"}
            color={"grey"}
            fontSize={{
              base: "3rem",
              md: "6rem",
            }}
            fontWeight={"bold"}
          >
            {type === InvitationType.Resepsi && `14`}
            {type === InvitationType.Unduh && `15`}
            {type === InvitationType.ResepsiUnduh && `14 & 15`}
          </Text>
          <Text
            className={"font-inter"}
            color={"grey"}
            fontSize={{
              base: "2rem",
              md: "3.25rem",
            }}
          >
            2023
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Hero;
