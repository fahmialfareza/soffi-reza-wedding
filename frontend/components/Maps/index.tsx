import { AspectRatio, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

function MapsInvitation() {
  return (
    <VStack
      width={"100%"}
      px={"3rem"}
      minHeight={"100vh"}
      justifyContent={"center"}
      gap={{
        base: "1rem",
        md: "1.5rem"
      }}
  
      color={"grey-light"}
    >
      <Text className="font-bukhari" fontSize={"3rem"}>
        Peta
      </Text>
      <Flex direction={"column"} width={"100%"}>
        <Text className="font-bukhari" fontSize={"1.2rem"}>
          Akad Nikah & Resepsi
        </Text>
        <Text className="font-inter" fontSize={"1rem"} color={"black"} mb={"1rem"}>
          Dsn. Bandung RT 02/RW 01, Ds. Beji, Kec. Tulung, Kab. Klaten
        </Text>

        <AspectRatio ratio={16 / 5} minWidth={"100%"}>
          <iframe
            height={"200px"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.7329839440986!2d110.5978801!3d-7.604009699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6904a7c66301%3A0x4d0416bdd9c22474!2sMI%20Muhammadiyah%20Beji%20(MIM%20Beji)!5e0!3m2!1sen!2sid!4v1666500287361!5m2!1sen!2sid"
          ></iframe>
        </AspectRatio>
      </Flex>
      <Flex direction={"column"} width={"100%"}>
        <Text className="font-bukhari" fontSize={"1.2rem"}>
          Unduh Mantu
        </Text>
        <Text className="font-inter" fontSize={"1rem"} color={"black"} mb={"1rem"}>
          Dsn. Dalangan RT 01/RW 01, Ds. Pandean, Kec. Ngablak, Kab. Magelang
        </Text>

        <AspectRatio ratio={16 / 5} minWidth={"100%"}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8022441025823!2d110.40389619999999!3d-7.3760481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7e9e55555555%3A0xba2944ec3e33efa0!2sWisata%20Alam%20Telomoyo!5e0!3m2!1sen!2sid!4v1666501526610!5m2!1sen!2sid"></iframe>
        </AspectRatio>
      </Flex>
    </VStack>
  );
}

export default MapsInvitation;

// Unduh mantu: https://goo.gl/maps/yfDbx5Y27yQ8wfod7
// Resepsi: https://goo.gl/maps/h9J491uNqsw2iyf18
