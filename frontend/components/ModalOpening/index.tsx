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
import InvitationType from "../../interfaces/type.interface";

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

export const theme = extendTheme({
  components: { Modal: modalTheme },
});

interface ModalOpeningProps {
  name: string;
  isOpen: boolean;
  onClose: () => void;
  type: InvitationType;
  isValid?: boolean;
}

function ModalOpening({
  isOpen,
  onClose,
  name,
  type,
  isValid = true,
}: ModalOpeningProps) {
  return (
    <ThemeProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"} variant={"green"}>
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
                gap={{
                  base: "0.2rem",
                  md: "1rem",
                }}
                textAlign={"center"}
                zIndex={"100"}
              >
                <Text
                  color={"white"}
                  className={"font-pacifio"}
                  fontSize={"2rem"}
                >
                  The Wedding Of
                </Text>
                <Image src={"/assets/bride.png"} alt={"Bride"} />
                {isValid ? (
                  <>
                    <Text
                      color={"white"}
                      className={"font-inter"}
                      fontSize={{
                        base: "1rem",
                        md: "1.5rem",
                      }}
                    >
                      Untuk Bapak/Ibu/Sdr/Sdri:
                    </Text>
                    <Text
                      color={"white"}
                      className={"font-inter"}
                      fontWeight={"medium"}
                      fontSize={{
                        base: "1.5rem",
                        md: "2rem",
                        sm: "1rem",
                      }}
                    >
                      {name}
                    </Text>
                    <VStack>
                      <Text
                        color={"white"}
                        className={"font-inter"}
                        fontSize={{
                          base: "1rem",
                          md: "1.5rem",
                        }}
                      >
                        Kami mengundang
                      </Text>
                      <Text
                        color={"white"}
                        className={"font-inter"}
                        fontSize={{
                          base: "1rem",
                          md: "1.5rem",
                        }}
                      >
                        Untuk datang ke{" "}
                        {type === InvitationType.Resepsi
                          ? "Resepsi"
                          : type === InvitationType.Unduh
                          ? "Unduh Mantu"
                          : type === InvitationType.ResepsiUnduh &&
                            "Resepsi & Unduh Mantu"}{" "}
                        Pernikahan Soffi & Reza
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
                      {type === InvitationType.Resepsi && `14 Januari 2023`}
                      {type === InvitationType.Unduh && `15 Januari 2023`}
                      {type === InvitationType.ResepsiUnduh &&
                        `14 & 15 Januari 2023`}
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
                      Buka Undangan
                    </Button>
                  </>
                ) : (
                  <>
                    <Text
                      color={"white"}
                      className={"font-inter"}
                      fontSize={{
                        base: "1.2rem",
                        md: "2rem",
                      }}
                      fontWeight={"bold"}
                    >
                      Undangan Tidak Valid
                    </Text>
                  </>
                )}
              </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ThemeProvider>
  );
}

export default ModalOpening;
