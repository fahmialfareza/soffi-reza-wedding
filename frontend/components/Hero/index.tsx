import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import InvitationType from "../../interfaces/type.interface";

import { motion } from "framer-motion";
import { AnimationBox } from "../layout/AnimationBox";

interface HeroProps {
  type: InvitationType;
}

function Hero({ type }: HeroProps) {
  return (
    <Box
      scrollSnapAlign="center"
      width={"100%"}
      overflowX={"hidden"}
      backgroundColor={"rgba(255, 245, 245, 0.9)"}
    >
      <Box
        position={"absolute"}
        left={0}
        overflowX={"hidden"}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Image
          src={"/assets/flower-left.png"}
          width={{
            base: "50%",
            md: "100%",
          }}
          alt={"hero-flower"}
        ></Image>
      </Box>
      <Box
        position={"absolute"}
        display={"flex"}
        right={0}
        justifyContent={"flex-end"}
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        <Image
          src={"/assets/flower-right.png"}
          width={{
            base: "50%",
            md: "100%",
          }}
          alt={"hero-flower"}
        ></Image>
      </Box>
      <VStack
        height={"100vh"}
        align={"center"}
        justifyContent={"center"}
        gap={"3rem"}
      >
        <AnimationBox
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ type: "spring", bounce: 0.75 }}
        >
          <Text
            fontSize={{
              base: "4xl",
              md: "6xl",
            }}
            className={"font-pacifio"}
            color={"grey"}
          >
            The Wedding Of
          </Text>
        </AnimationBox>

        <AnimationBox
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Image src="/assets/bride.png" alt="mempelai" />
        </AnimationBox>

        <HStack spacing={"1.5rem"}>
          <AnimationBox
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ type: "spring", bounce: 0.75, delay: 0.5 }}
          >
            <Text
              className={"font-inter"}
              color={"grey"}
              fontSize={{
                base: "2rem",
                md: "3.25rem",
              }}
            >
              JAN{" "}
            </Text>
          </AnimationBox>

          <AnimationBox
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ type: "spring", bounce: 0.75, delay: 1 }}
          >
            <Text
              className={"font-inter"}
              color={"grey"}
              fontSize={{
                base: "3rem",
                md: "6rem",
              }}
              fontWeight={"bold"}
            >
              {type === InvitationType.Resepsi && `14`}
              {type === InvitationType.Unduh && `15`}
              {type === InvitationType.ResepsiUnduh && `14 & 15`}
            </Text>
          </AnimationBox>
          <AnimationBox
            initial={{ opacity: 0, y: -100, scale: 0 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ type: "spring", bounce: 0.5, delay: 1 }}
          >
            <Text
              className={"font-inter"}
              color={"grey"}
              fontSize={{
                base: "2rem",
                md: "3.25rem",
              }}
            >
              2023
            </Text>
          </AnimationBox>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Hero;
