import { NextPage } from "next";
import {
  Box,
  Button,
  HStack,
  Image,
  keyframes,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import CardChat from "../ChatCard";
import { BubbleChat } from "../icons/BubbleChat";
import { Gift } from "../icons/Gift";

import { motion } from "framer-motion";
import ModalUcapan from "../ModalUcapan";
import ModalGift from "../ModalGift";
import { IMessage } from "../../interfaces/messages.interface";
import convertToMonth from "../../helpers/month";

interface GuestBookProps {
  messages: IMessage[];
  to: string;
}

const animationKeyframes = keyframes`
 0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(250, 184, 196, 0.54);
    border-radius: 8px;
  }
 25% {
    transform: scale(1);
    box-shadow: 0 0 0 4px rgba(250, 184, 196, 0.54);
    border-radius: 8px;
  }
 50% {
    transform: scale(1);
    box-shadow: 0 0 0 2px rgba(250, 184, 196, 0.54);
    border-radius: 8px;
  }
  
  75% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(250, 184, 196, 1);
  }
  
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(250, 184, 196, 0.8);
  }
}
`;

const animation = `${animationKeyframes} 1s ease-in-out infinite`;

const GuestBook: NextPage<GuestBookProps> = ({ messages, to }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenGiftModal,
    onOpen: onOpenGiftModal,
    onClose: onCloseGiftModal,
  } = useDisclosure();
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
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/white-flower-up-left.png"
          alt="white-flower-up-left"
          position={"absolute"}
          width={{
            base: "20%",
            md: "15%",
          }}
          top={-20}
          left={0}
        ></Image>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/white-flower-up-right.png"
          alt="white-flower-up-left"
          position={"absolute"}
          width={{
            base: "20%",
            md: "15%",
          }}
          top={-20}
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
        justifyContent={"center"}
        height={"100vh"}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{ bounce: 0.5, type: "spring", duration: 1, delay:0.5 }}
        >
          <Text className="font-bukhari" color="white" fontSize={"3rem"}>
            Buku Tamu
          </Text>
        </motion.div>

        <VStack
          gap={"1rem"}
          px={{
            base: "1rem",
            md: "2rem",
          }}
          height={{
            base: "50vh",
            md: "60vh",
          }}
          overflowY={"scroll"}
          sx={{
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "24px",
            },
          }}
        >
          {messages &&
            messages.length > 0 &&
            messages.map((message) => {
              const date = new Date(message.createdAt);
              const displayedDate = `${date.getDate()} ${convertToMonth(
                date.getMonth()
              )}`.toUpperCase();

              return (
                <CardChat
                  key={message.id}
                  date={displayedDate}
                  name={message.name}
                  message={message.message}
                  status={message.attending ? "hadir" : "tidakhadir"}
                />
              );
            })}
        </VStack>

        <HStack
          gap={{
            base: "1rem",
            md: "8rem",
          }}
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{ bounce: 0.5, type: "spring", duration: 1, delay:0.5 }}
          >
            <Button
              size={"lg"}
              backgroundColor={"grey"}
              _hover={{
                backgroundColor: "grey",
                boxShadow: "0 0 0 2px #FAB8C4",
              }}
              leftIcon={<BubbleChat className="shaking" />}
              onClick={onOpen}
            >
              Kirim Ucapan
            </Button>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            // @ts-ignore no problem in operation, although type error appears.
            transition={{
              bounce: 0.5,
              type: "spring",
              duration: 1,
              delay: 0.5,
            }}
          >
            <Box as={motion.div} animation={animation}>
              <Button
                size={"lg"}
                backgroundColor={"grey"}
                _hover={{
                  backgroundColor: "grey",
                  boxShadow: "0 0 0 2px #FAB8C4",
                }}
                leftIcon={<Gift className="shaking" />}
                onClick={onOpenGiftModal}
              >
                Kirim Amplop
              </Button>
            </Box>
          </motion.div>
        </HStack>
      </VStack>

      <ModalUcapan isOpen={isOpen} onClose={onClose} to={to} />
      <ModalGift isOpen={isOpenGiftModal} onClose={onCloseGiftModal} />

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/white-flower-down-left.png"
          alt="white-flower-up-left"
          position={"absolute"}
          width={{
            base: "20%",
            md: "15%",
          }}
          bottom={0}
          left={0}
        ></Image>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/assets/white-flower-down-right.png"
          alt="white-flower-up-left"
          position={"absolute"}
          width={{
            base: "20%",
            md: "15%",
          }}
          bottom={0}
          right={0}
        ></Image>
      </motion.div>
    </Box>
  );
};

export default GuestBook;
