import {
  Box,
  Button,
  Divider,
  HStack,
  VStack,
  Text,
  Badge,
} from "@chakra-ui/react";
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
        <Text
          className={"font-inter"}
          fontSize={{
            base: "0.8rem",
            md: "1rem",
          }}
          maxW={{
            base: "2rem",
            md: "2.5rem",
          }}
        >
          {date}
        </Text>
        <Divider orientation="vertical" height={"100%"} border={"1px"} />
        <Text
          textAlign={"left"}
          fontSize={{
            base: "0.8rem",
            md: "1rem",
          }}
          noOfLines={{
            base: 2,
            md: 3
          }}
          className={"font-inter"}
          minWidth={{
            base: "180px",
            md: "400px",
            lg: "460px",
          }}
          maxWidth={{
            base: "180px",
            md: "400px",
            lg: "460px",
          }}
        >
          {message}
        </Text>
        <Divider orientation="vertical" height={"100%"} border={"1px"} />
        <VStack
          minWidth={{
            base: "80px",
            md: "146px",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            noOfLines={1}
            className={"font-inter"}
            fontSize={{
              base: "0.8rem",
              md: "1rem",
            }}
          >
            {name}
          </Text>

          {status === "hadir" ? (
            <Badge
              size={{
                base: "xs",
                md: "sm",
              }}
              textTransform={"lowercase"}
              colorScheme={"green"}
            >
              Hadir
            </Badge>
          ) : (
            <Badge
              size={{
                base: "xs",
                md: "sm",
              }}
              textTransform={"lowercase"}
              colorScheme={"red"}
            >
              Tdak Hadir
            </Badge>
          )}
        </VStack>
      </HStack>
    </Box>
  );
}

export default CardChat;
