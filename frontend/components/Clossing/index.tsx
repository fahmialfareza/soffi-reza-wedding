import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { CalendarFill } from "../icons/CalendarFill";
import { MapsFill } from "../icons/Maps";
import { motion } from "framer-motion";

function ClosingInvitation() {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundColor={"green"}
      mx={0}
      px={0}
      position={"relative"}
      overflowX={"hidden"}
      scrollSnapAlign="center"
      textAlign={"center"}
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
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
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      <VStack
        textAlign={"center"}
        color={"white"}
        gap={{
          base: "1rem",
          md: "3rem",
        }}
        mx={{
          base: "0.5rem",
          md: "0",
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
          {" "}
          <Text
            maxWidth={"620px"}
            className={"font-inter"}
            textAlign={"center"}
            fontWeight={{
              base: "normal",
              md: "medium",
            }}
            fontSize={{
              base: "1rem",
              md: "1.5rem",
            }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
            kedua mempelai.
          </Text>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1 }}
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
            Wassalamu`alaikum Warahmatullahi Wabarakatuh.
          </Text>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Image
            width={{
              base: "50%",
              md: "30%",
            }}
            src={"/assets/bride.png"}
            alt={"bride"}
          />
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text
            maxWidth={"650px"}
            className={"font-inter"}
            fontWeight={"normal"}
            fontSize={{
              base: "1rem",
              md: "1.2rem",
            }}
          >
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu merasa
            tenang dan tentram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berfikir.” <br /> (QS. Ar-Rum:
            21)
          </Text>
        </motion.div>
      </VStack>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
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
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
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

export default ClosingInvitation;
