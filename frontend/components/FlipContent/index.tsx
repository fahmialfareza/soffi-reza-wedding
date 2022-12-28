import {
  Button,
  Center,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function FlipContent() {
  return (
    <Center>
      <VStack gap={"1rem"}>
        <VStack>
          <FormLabel className="font-inter">a.n. Fahmi Alfareza</FormLabel>
          <InputGroup size="md">
            <Input pr="4.5rem" value="flip.id/me/fahmialf1409" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() =>
                  window.open("https://flip.id/me/fahmialf1409", "_blank")
                }
              >
                Buka
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>

        <VStack>
          <FormLabel className="font-inter">
            a.n. Soffi Lutfia Dewi Trizana
          </FormLabel>
          <InputGroup size="md">
            <Input pr="4.5rem" value="flip.id/me/soffilutt1801" />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() =>
                  window.open("https://flip.id/me/soffilutt1801", "_blank")
                }
              >
                Buka
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </VStack>
    </Center>
  );
}

export default FlipContent;
