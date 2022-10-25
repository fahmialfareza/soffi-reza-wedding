import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  extendTheme,
  ThemeProvider,
  Button,
  Center,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";

import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const green = definePartsStyle({
  dialog: {
    bg: `#598784`,
  },
});

export const modalTheme = defineMultiStyleConfig({
  variants: { green },
});

function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}


export const theme = extendTheme({
  components: { Modal: modalTheme },
});

interface ModalOpeningProps {
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

function ModalOpening({ isOpen, onClose, name }: ModalOpeningProps) {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
        variant={"green"}
      >
        <ModalOverlay />
        <ModalContent padding={"1rem"} color={"grey"}>
          <ModalBody mb={"1rem"}>
            <Center>
              <Box
                height={"100%"}
                backgroundRepeat={"no-repeat"}
                position={"absolute"}
                top={"0"}
                left={"0"}
              >
                <Image
                  width={{
                    base: "100px",
                    md: "480px",
                    sm: "50px",
                  }}
                  src={"./assets/bg-up-left.png"}
                  alt={"bg-up-left"}
                ></Image>
              </Box>
              <Box
                height={"100%"}
                backgroundRepeat={"no-repeat"}
                position={"absolute"}
                top={"0"}
                right={"0"}
              >
                <Image
                  width={{
                    base: "100px",
                    md: "480px",
                    sm: "50px",
                  }}
                  src={"./assets/bg-up-right.png"}
                  alt={"bg-up-left"}
                ></Image>
              </Box>

              <VStack
                justifyContent={"center"}
                height={"100vh"}
                gap={"1rem"}
                textAlign={"center"}
                zIndex={"100"}
              >
                <Text
                  color={"white"}
                  className={"font-pacifio"}
                  fontSize={"2rem"}
                >
                  Helo, We Are Getting Married
                </Text>
                <Image src={"/assets/bride.png"} alt={"Bride"} />
                <Text
                  color={"white"}
                  className={"font-inter"}
                  fontWeight={"medium"}
                  fontSize={"2rem"}
                >{`Dear: ${titleCaseWord(name)}`}</Text>
                <VStack>
                  <Text
                    color={"white"}
                    className={"font-inter"}
                    fontSize={{
                      base: "1rem",
                      md: "1.5rem",
                    }}
                  >
                    You`re Invited
                  </Text>
                  <Text
                    color={"white"}
                    className={"font-inter"}
                    fontSize={{
                      base: "1rem",
                      md: "1.5rem",
                    }}
                  >
                    Please Come to My Wedding
                  </Text>
                </VStack>
                <Text
                  color={"white"}
                  className={"font-inter"}
                  fontSize={{
                    base: "1.2rem",
                    md: "2rem",
                  }}
                  fontWeight={"bold"}
                >
                  January 14th 2023
                </Text>

                <Button
                  onClick={onClose}
                  size={{
                    base: "md",
                    md: "lg",
                  }}
                  backgroundColor={"black"}
                  className={"font-inter"}
                  color={"white"}
                  _hover={{
                    backgroundColor: "black",
                    boxShadow: "0 0 0 2px #FAB8C4",
                  }}
                >
                  Open Invitation
                </Button>
              </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ThemeProvider>
  );
}

export default ModalOpening;
