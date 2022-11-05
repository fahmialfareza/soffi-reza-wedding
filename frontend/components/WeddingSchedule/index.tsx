import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { MutableRefObject } from "react";
import { atcb_action } from "add-to-calendar-button";
import "add-to-calendar-button/assets/css/atcb.css";
import { motion } from "framer-motion";

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
      // overflowX={"hidden"}
      scrollSnapAlign="center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
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
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

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
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1 }}
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
        </motion.div>

        <VStack
          gap={{
            base: "0.5rem",
            md: "1rem",
          }}
        >
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ bounce: 0.5, type: "spring", duration: 1 }}
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
          </motion.div>

          <VStack>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{ bounce: 0.5, type: "spring", duration: 1 }}
            >
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
            </motion.div>
          </VStack>

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ bounce: 0.5, type: "spring", duration: 1 }}
          >
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
          </motion.div>
        </VStack>

        <VStack gap={"1rem"}>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ bounce: 0.5, type: "spring", duration: 1.5 }}
          >
            <Text
              className="font-bookerly-bold"
              fontSize={{
                base: "1rem",
                md: "2rem",
              }}
            >
              Unduh Mantu
            </Text>
          </motion.div>

          <VStack>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{ bounce: 0.5, type: "spring", duration: 1.5 }}
            >
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
            </motion.div>
          </VStack>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ bounce: 0.5, type: "spring", duration: 1.5 }}
          >
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
          </motion.div>
        </VStack>
        <HStack justifyContent={"space-between"}>
          <Button
            size={{
              base: "sm",
              md: "md",
              lg: "lg",
            }}
            backgroundColor={"grey"}
            _hover={{
              backgroundColor: "grey",
              boxShadow: "0 0 0 2px #FAB8C4",
            }}
            leftIcon={<CalendarFill className="shaking" />}
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
            size={{
              base: "sm",
              md: "md",
              lg: "lg",
            }}
            backgroundColor={"grey"}
            _hover={{
              backgroundColor: "grey",
              boxShadow: "0 0 0 2px #FAB8C4",
            }}
            leftIcon={<MapsFill className="shaking" />}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(maps);
            }}
          >
            Lihat Lokasi
          </Button>
        </HStack>
      </VStack>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </Box>
  );
}

export default WeddingSchedule;
