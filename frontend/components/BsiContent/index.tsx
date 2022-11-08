import {
  Button,
  Center,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function BsiModalContent() {
  const [copySuccess, setCopySuccess] = React.useState("");
  const [soffiSuccess, setSoffiSuccess] = React.useState("");

  const copyToClipBoard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setCopySuccess("Disalin!");
      setTimeout(() => setCopySuccess(""), 3000);
    } catch (err) {
      setCopySuccess("Failed to copy!");
    }
  };
  const copyToClipBoardSoffi = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setSoffiSuccess("Disalin!");
      setTimeout(() => setSoffiSuccess(""), 3000);
    } catch (err) {
      setSoffiSuccess("Failed to copy!");
    }
  };

  return (
    <Center>
      <VStack gap={"1rem"}>
        <Show above={"sm"}>
          <Text
            className="font-inter"
            fontSize={"1.2rem"}
            fontWeight={"medium"}
          >
            Scan Barcode
          </Text>
          <Image src={"/assets/bsi-reza.png"} alt={"BSI REZA"} />
        </Show>

        <VStack>
          <FormLabel className="font-inter">a.n. Fahmi Alfareza</FormLabel>
          <InputGroup size="md">
            <Input pr="4.5rem" value="BSI 5882308970" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => copyToClipBoard("5882308970")}
              >
                {copySuccess ? copySuccess : "Salin"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>

        <Show above={"sm"}>
          <Image src={"/assets/bsi-soffi.png"} alt={"BSI Soffi"} />
        </Show>

        <VStack>
          <FormLabel className="font-inter">
            a.n. Soffi Lutfia Dewi Trizana
          </FormLabel>
          <InputGroup size="md">
            <Input pr="4.5rem" value="BSI 7118619115" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => copyToClipBoardSoffi("7118619115")}
              >
                {soffiSuccess ? soffiSuccess : "Salin"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </VStack>
    </Center>
  );
}

export default BsiModalContent;
