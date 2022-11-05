import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

function ProkesCovid() {
  return (
    <VStack
      justifyContent={"center"}
      height={"100vh"}
      gap={"4rem"}
      backgroundColor={"rgba(255, 245, 245, 0.9)"}
    >
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Text
          className="font-bukhari"
          color={"grey"}
          fontSize={{
            base: "2rem",
            md: "3rem",
          }}
        >
          Protokol Kesehatan
        </Text>
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, bounce: 0.75, delay: 0.5 }}
      >
        <Image src={"/assets/covid-prokes.png"} alt={"Prokes"} />
      </motion.div>
    </VStack>
  );
}

export default ProkesCovid;
