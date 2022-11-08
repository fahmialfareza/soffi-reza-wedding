import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const getRandomTransformOrigin = () => {
  const value = (16 + 40 * Math.random()) / 100;
  const value2 = (15 + 36 * Math.random()) / 100;
  return {
    originX: value,
    originY: value2,
  };
};

function WeddingText() {
  return (
    <Box
      height={"100vh"}
      scrollSnapAlign="center"
      mx={0}
      px={0}
      position={"relative"}
      overflowX={"hidden"}
      backgroundColor={"rgba(255, 245, 245, 0.9)"}
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
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1 }}
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
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1, delay: 0.5 }}
        >
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
            Assalamu`alaikum Warahmatullahi Wabarakatuh. Dengan memohon rahmat
            dan ridho Allah SWT, kami bermaksud menyelenggarakan acara
            pernikahan putra-putri kami:
          </Text>
        </motion.div>
        <VStack gap={"1rem"}>
          <VStack>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.75,
              }}
            >
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
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                type: "spring",
                duration: 1,
                delay: 0.75,
              }}
            >
              <Text
                className="font-inter"
                fontSize={{
                  base: "0.8rem",
                  md: "1.2rem",
                }}
                textAlign={"center"}
                color={"grey-light"}
              >
                Putri Ketiga dari Bpk. Muhammad Amir & Ibu Neni Susilawati
              </Text>
            </motion.div>
          </VStack>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              type: "spring",
              duration: 1,
              delay: 0.75,
            }}
          >
            <Text
              className="font-bukhari"
              color={"grey-light"}
              fontSize={"4.3rem"}
            >
              &
            </Text>
          </motion.div>
          <VStack textAlign={"center"}>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // @ts-ignore no problem in operation, although type error appears.
              transition={{
                type: "spring",
                duration: 1,
                delay: 1,
              }}
            >
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
                Putra Pertama dari Bpk. Edi Sutrisno & Ibu Sumiyati
              </Text>
            </motion.div>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default WeddingText;
