import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CalendarFill } from "../icons/CalendarFill";
import { MapsFill } from "../icons/Maps";

function ClosingInvitation() {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundColor={"green"}
      mx={0}
      px={0}
      position={"relative"}
      scrollSnapAlign="center"
    >
      <Image
        src="/assets/clossing-up-left.png"
        alt="clossing-up-left"
        position={"absolute"}
        width={{
          base: "15%",
        }}
        top={0}
        left={0}
      ></Image>
      <Image
        src="/assets/clossing-up-right.png"
        alt="clossing-up-right"
        position={"absolute"}
        width={{
          base: "15%",
        }}
        top={0}
        right={0}
      ></Image>

      <VStack
        textAlign={"center"}
        color={"white"}
        gap={{
          base: "1rem",
          md:"3rem"
        }}
        mx={{
          base: "0.5rem",
          md: "0"
        }}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Text
          maxWidth={"620px"}
          className={"font-inter"}
          fontWeight={"medium"}
          fontSize={{
            base: "1rem",
            md: "1.5rem",
          }}
        >
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
          kedua mempelai.
        </Text>
        <Text
          maxWidth={"620px"}
          className={"font-inter"}
          fontWeight={"medium"}
          fontSize={{
            base: "1rem",
            md: "1.5rem",
          }}
        >
          Wassalamu`alaikum Warahmatullahi Wabarakatuh.
        </Text>
        <Image src={"/assets/bride.png"} alt={"bride"} />
        <Text
          maxWidth={"650px"}
          className={"font-inter"}
          fontWeight={"normal"}
              fontSize={{
            base: "1rem",
            md: "1.2rem",
          }}
        >
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu merasa tenang dan
          tentram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
          Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda
          bagi kaum yang berfikir.” <br /> (QS. Ar-Rum: 21)
        </Text>
      </VStack>

      <Image
        src="/assets/white-flower-down-left.png"
        alt="white-flower-up-left"
        position={"absolute"}
        width={{
          base: "15%",
        }}
        bottom={0}
        left={0}
      ></Image>
      <Image
        src="/assets/white-flower-down-right.png"
        alt="white-flower-up-left"
        position={"absolute"}
        width={{
          base: "15%",
        }}
        bottom={0}
        right={0}
      ></Image>
    </Box>
  );
}

export default ClosingInvitation;
