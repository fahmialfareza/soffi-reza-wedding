import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ProkesCovid() {
  return (
    <VStack justifyContent={"center"} height={"100vh"} gap={"4rem"} backgroundColor={"rgba(255, 245, 245, 0.9)"}>
      <Text className="font-bukhari" color={"grey"} fontSize={{
        base: "2rem",
        md: "3rem"
      }}>Protokol Kesehatan</Text>
      <Image src={"/assets/covid-prokes.png" } alt={"Prokes"} />
    </VStack>
  );
}

export default ProkesCovid;
