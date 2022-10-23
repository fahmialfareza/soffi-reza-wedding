import { Box, Button, Divider, HStack, VStack, Text } from "@chakra-ui/react";
import React from "react";

interface CardChatProps {
    date: string;
    name: string;
    message: string;
    status: string;
}

function CardChat({ date, name, message, status }: CardChatProps) {
  return (
    <Box
      minWidth={"100%"}
      backgroundColor={"white"}
      padding={{
        base: "0.2rem",
        md: "1rem",
      }}
      borderRadius={"8px"}
      color={"grey"}
    >
      <HStack
        color={"black"}
        height={"100%"}
        gap={{
          base: "0.2rem",
          md: "1.5rem",
        }}
        mx={"1rem"}
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <Text className={"font-inter"}>{date}</Text>
        <Divider orientation="vertical" height={"100%"} border={"1px"} />
        <Text textAlign={"left"} className={"font-inter"} minWidth={{
          base: "150px",
          md: "400px",
          lg: "460px"
        }}>
          {message}
        </Text>
        <Divider orientation="vertical" height={"100%"} border={"1px"} />
        <VStack
          minWidth={{
            md: "146px",
          }}
        >
          <Text className={"font-inter"}>{name}</Text>

          {status === "hadir" ? (
            <Button
              size={{
                base: "xs",
                md: "sm",
              }}
              px={"2rem"}
              textTransform={"uppercase"}
              colorScheme={"green"}
            >
              Hadir
            </Button>
          ) : (
            <Button
              size={{
                base: "xs",
                md: "sm",
              }}
              px={"2rem"}
              textTransform={"uppercase"}
              colorScheme={"red"}
            >
              Tdak Hadir
            </Button>
          )}
        </VStack>
      </HStack>
    </Box>
  );
}

export default CardChat;
