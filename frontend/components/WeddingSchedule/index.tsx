import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CalendarFill } from "../icons/CalendarFill";
import { MapsFill } from "../icons/Maps";

function WeddingSchedule() {
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
        src="/assets/white-flower-up-left.png"
        alt="white-flower-up-left"
        position={"absolute"}
        top={0}
        left={0}
      ></Image>
      <Image
        src="/assets/white-flower-up-right.png"
        alt="white-flower-up-left"
        position={"absolute"}
        top={0}
        right={0}
      ></Image>

      <VStack
        textAlign={"center"}
        color={"white"}
        gap={"3rem"}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Text className="font-bukhari" color="pink" fontSize={"3rem"}>
          Jadwal
        </Text>

        <VStack gap={"1rem"}>
          <Text className="font-bookerly-bold" fontSize={"2rem"}>
            Akad Nikah & Resepsi
          </Text>
          <VStack>
            <Text className="font-bookerly-bold" fontSize={"1.5rem"}>
              Sabtu, 14 Januari 2023 <br /> Pukul 07:00 WIB - selesai
            </Text>
            <Text className="font-bookerly" fontSize={"1.5rem"}>
              Kediaman mempelai wanita
            </Text>
          </VStack>

          <Text className="font-inter" fontSize={"1.5rem"} fontWeight={"bold"}>
            Dsn. Bandung RT 02/RW 01 <br />
            Ds. Beji, Kec. Tulung, Kab. Klaten
          </Text>
        </VStack>

        <VStack gap={"1rem"}>
          <Text className="font-bookerly-bold" fontSize={"2rem"}>
            Unduh Mantu
          </Text>
          <VStack>
            <Text className="font-bookerly-bold" fontSize={"1.5rem"}>
              Ahad, 15 Januari 2023 <br /> Pukul 08:00 WIB - selesai
            </Text>
            <Text className="font-bookerly" fontSize={"1.5rem"}>
              Kediaman mempelai pria
            </Text>
          </VStack>
          <Text className="font-inter" fontSize={"1.5rem"} fontWeight={"bold"}>
            Dsn. Dalangan RT 01/RW 01 <br />
            Ds. Pandean, Kec. Ngablak, Kab. Magelang
          </Text>
        </VStack>
        <HStack gap={"8rem"}>
          <Button
            size={"md"}
            backgroundColor={"grey"}
            _hover={{
              backgroundColor: "grey",
              boxShadow: "0 0 0 2px #FAB8C4",
            }}
            leftIcon={<CalendarFill />}
          >
            Simpan Ke Kalender
          </Button>
          <Button
            size={"md"}
            backgroundColor={"grey"}
            _hover={{
              backgroundColor: "grey",
              boxShadow: "0 0 0 2px #FAB8C4",
            }}
            leftIcon={<MapsFill />}
          >
            Lihat Lokasi
          </Button>
        </HStack>
      </VStack>

      <Image
        src="/assets/white-flower-down-left.png"
        alt="white-flower-up-left"
        position={"absolute"}
        bottom={0}
        left={0}
      ></Image>
      <Image
        src="/assets/white-flower-down-right.png"
        alt="white-flower-up-left"
        position={"absolute"}
        bottom={0}
        right={0}
      ></Image>
    </Box>
  );
}

export default WeddingSchedule;