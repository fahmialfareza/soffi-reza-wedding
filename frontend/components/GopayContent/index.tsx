import {
  Button,
  Center,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react"
import React from 'react'

function GopayContent() {

    const [copySuccess, setCopySuccess] = React.useState("");

    // your function to copy here

    const copyToClipBoard = async (copyMe: string) => {
      try {
        await navigator.clipboard.writeText(copyMe);
        setCopySuccess("Copied!");
      } catch (err) {
        setCopySuccess("Failed to copy!");
      }
    };

  return (
    <Center>
      <VStack>
        <Text className="font-inter" fontSize={"1.2rem"} fontWeight={"medium"}>
          Scan Barcode
        </Text>
        <Image src={"/assets/gopay-reza.png"} alt={"BSI REZA"} />

        <VStack>
          <FormLabel className="font-inter">a.n. Fahmi Alfareza</FormLabel>
          <InputGroup size="md">
            <Input pr="4.5rem" value="GOPAY 085172481997" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => copyToClipBoard("085172481997")}
              >
                {copySuccess ? copySuccess : "Copy"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </VStack>
    </Center>
  );
}

export default GopayContent;
