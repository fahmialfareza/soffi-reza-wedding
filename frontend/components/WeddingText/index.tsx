import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

function WeddingText() {
  return (
    <Box
      height={"100vh"}
      scrollSnapAlign="center"
      mx={0}
      px={0}
      position={"relative"}
    >
      <VStack
        mx={{
          base: "3rem",
          md: "7rem",
        }}
        height={"100vh"}
        justifyContent={"center"}
        gap={{
          base: "3rem",
          md: "6rem",
        }}
      >
        <Text
          className="font-pacifio"
          color={"grey-light"}
          fontSize={{
            base: "1.5rem",
            md: "3rem",
          }}
        >
          Bismillahirrahmanirrahim
        </Text>
        <Text
          className="font-inter"
          fontWeight={"500"}
          textAlign={"center"}
          color={"grey-light"}
          fontSize={{
            base: "1rem",
            md: "1.5rem",
          }}
        >
          Assalamu`alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat dan
          ridho Allah SWT, kami bermaksud menyelenggarakan acara pernikahan
          putra-putri kami:
        </Text>
        <VStack gap={"1rem"}>
          <VStack>
            <Text
              className="font-pacifio"
              color={"grey-light"}
              fontSize={{
                base: "1.5rem",
                md: "2.2rem",
              }}
            >
              Fahmi Alfareza
            </Text>
            <Text
              className="font-inter"
              fontSize={{
                base: "0.8rem",
                md: "1.2rem",
              }}
              textAlign={"center"}
              color={"grey-light"}
            >
              Putra Pertama Bpk. Edi Sutrisno & Ibu Sumiyati
            </Text>
          </VStack>
          <Text
            className="font-bukhari"
            color={"grey-light"}
            fontSize={"4.3rem"}
          >
            &
          </Text>
          <VStack>
            <Text
              className="font-pacifio"
              color={"grey-light"}
              fontSize={{
                base: "1.5rem",
                md: "2.2rem",
              }}
            >
              Soffi Lutfia Dewi Trizana
            </Text>
            <Text
              className="font-inter"
              fontSize={{
                base: "0.8rem",
                md: "1.2rem",
              }}
              textAlign={"center"}
              color={"grey-light"}
            >
              Putra Pertama Bpk. Muhammad Amir & Ibu Neni Susilawati
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default WeddingText;
