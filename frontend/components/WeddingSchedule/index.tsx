import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { atcb_action } from "add-to-calendar-button";
import "add-to-calendar-button/assets/css/atcb.css";

import InvitationType from "../../interfaces/type.interface";
import { CalendarFill } from "../icons/CalendarFill";
import { MapsFill } from "../icons/Maps";

interface WeddingScheduleProps {
  maps: MutableRefObject<HTMLDivElement> | undefined;
  handleScroll: (ref: any) => void;
  type: InvitationType;
}

function WeddingSchedule({ maps, handleScroll, type }: WeddingScheduleProps) {
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
        width={{
          base: "15%",
        }}
        left={0}
      ></Image>
      <Image
        src="/assets/white-flower-up-right.png"
        alt="white-flower-up-left"
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
          md: "1.5rem",
          lg: "1.5rem",
        }}
        justifyContent={"center"}
        height={"100vh"}
      >
        <Text
          className="font-bukhari"
          color="pink"
          fontSize={{
            base: "1.5rem",
            md: "3rem",
          }}
        >
          Jadwal
        </Text>

        <VStack
          gap={{
            base: "0.5rem",
            md: "1rem",
          }}
        >
          <Text
            className="font-bookerly-bold"
            fontSize={{
              base: "1rem",
              md: "2rem",
            }}
          >
            Akad Nikah & Resepsi
          </Text>
          <VStack>
            <Text
              className="font-bookerly-bold"
              fontSize={{
                base: "1rem",
                md: "1.5rem",
              }}
            >
              Sabtu, 14 Januari 2023 <br /> Pukul 07:00 WIB - selesai
            </Text>
            <Text
              className="font-bookerly"
              fontSize={{
                base: "1rem",
                md: "1.5rem",
              }}
            >
              Kediaman mempelai wanita
            </Text>
          </VStack>

          <Text
            className="font-inter"
            fontSize={{
              base: "1rem",
              md: "1.5rem",
            }}
            fontWeight={"bold"}
          >
            Dsn. Bandung RT 02/RW 01 <br />
            Ds. Beji, Kec. Tulung, Kab. Klaten
          </Text>
        </VStack>

        <VStack gap={"1rem"}>
          <Text
            className="font-bookerly-bold"
            fontSize={{
              base: "1rem",
              md: "2rem",
            }}
          >
            Unduh Mantu
          </Text>
          <VStack>
            <Text
              className="font-bookerly-bold"
              fontSize={{
                base: "1rem",
                md: "1.5rem",
              }}
            >
              Ahad, 15 Januari 2023 <br /> Pukul 08:00 WIB - selesai
            </Text>
            <Text
              className="font-bookerly"
              fontSize={{
                base: "1rem",
                md: "1.5rem",
              }}
            >
              Kediaman mempelai pria
            </Text>
          </VStack>
          <Text
            className="font-inter"
            fontSize={{
              base: "1rem",
              md: "1.5rem",
            }}
            fontWeight={"bold"}
          >
            Dsn. Dalangan RT 01/RW 01 <br />
            Ds. Pandean, Kec. Ngablak, Kab. Magelang
          </Text>
        </VStack>
        <HStack justifyContent={"space-between"}>
          <Button
            size={"md"}
            backgroundColor={"grey"}
            _hover={{
              backgroundColor: "grey",
              boxShadow: "0 0 0 2px #FAB8C4",
            }}
            leftIcon={<CalendarFill />}
            onClick={(e) => {
              e.preventDefault();
              atcb_action({
                name:
                  type === InvitationType.Resepsi
                    ? "Resepsi Pernikahan Soffi & Reza"
                    : type === InvitationType.Unduh
                    ? "Unduh Mantu Pernikahan Soffi & Reza"
                    : type === InvitationType.ResepsiUnduh
                    ? "Resepsi & Unduh Mantu Pernikahan Soffi & Reza"
                    : "",
                startDate:
                  type === InvitationType.Resepsi
                    ? "2023-01-14"
                    : type === InvitationType.Unduh
                    ? "2023-01-15"
                    : type === InvitationType.ResepsiUnduh
                    ? "2023-01-14"
                    : "",
                endDate:
                  type === InvitationType.Resepsi
                    ? "2023-01-14"
                    : type === InvitationType.Unduh
                    ? "2023-01-15"
                    : type === InvitationType.ResepsiUnduh
                    ? "2023-01-15"
                    : "",
                options: ["Apple", "Google", "iCal"],
                timeZone: "Asia/Jakarta",
                iCalFileName: "soffi-reza-wedding",
                location:
                  type === InvitationType.Resepsi
                    ? "https://goo.gl/maps/kZeFvwBeS5ESfk3UA"
                    : type === InvitationType.Unduh
                    ? "https://goo.gl/maps/Xhncn9e7nUB9wnER6"
                    : "",
                description:
                  type === InvitationType.ResepsiUnduh
                    ? `Maps Resepsi (14 Januari): <a href="https://goo.gl/maps/kZeFvwBeS5ESfk3UA">https://goo.gl/maps/kZeFvwBeS5ESfk3UA</a>\nMaps Unduh Mantu (15 Januari): https://goo.gl/maps/Xhncn9e7nUB9wnER6`
                    : "",
              });
            }}
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
            onClick={(e) => {
              e.preventDefault();
              handleScroll(maps);
            }}
          >
            Lihat Lokasi
          </Button>
        </HStack>
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

export default WeddingSchedule;
