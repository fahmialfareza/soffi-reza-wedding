import { useEffect, useState, useRef, MutableRefObject } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { io } from "socket.io-client";

import ClosingInvitation from "../components/Clossing";
import Footer from "../components/Footer";
import GuestBook from "../components/GuestBook";
import Hero from "../components/Hero";
import MainLayout from "../components/layout/MainLayout";
import MapsInvitation from "../components/Maps";
import ProkesCovid from "../components/Prokes";
import WeddingSchedule from "../components/WeddingSchedule";
import WeddingText from "../components/WeddingText";
import { IMessage } from "../interfaces/messages.interface";
import { Box, useDisclosure, VStack } from "@chakra-ui/react";
import ModalOpening from "../components/ModalOpening";
import InvitationType from "../interfaces/type.interface";
import Backsound from "../components/Backsound";
import BackgroundFixed from "../components/layout/BackgroundFixed";

interface HomeProps {
  messages: IMessage[];
  to: string | null;
  type: InvitationType;
}

const socket = io(process.env.NEXT_PUBLIC_BACKEND_API!);

const Home: NextPage<HomeProps> = ({ messages: messageFromSSR, to, type }) => {
  const [messages, setMessages] = useState(messageFromSSR);
  const [play, setPlay] = useState(false);
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: false });

  const audioRef = useRef<HTMLAudioElement>(null);
  const maps = useRef<HTMLDivElement>(null);

  const handleScroll = (ref: MutableRefObject<HTMLDivElement | undefined>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("message", (message: IMessage) => {
      setMessages([message, ...messages]);
    });
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      setPlay(true);
      audioRef.current?.play();
    }
  }, [isOpen]);

  if (!to) {
    return (
      <MainLayout>
        <ModalOpening
          name={""}
          isOpen={isOpen}
          onClose={onClose}
          type={type}
          isValid={false}
        />
      </MainLayout>
    );
  }

  return (
    <>
      <Head>
        <title>Undangan Pernikahan Soffi & Reza untuk {to}</title>
      </Head>

      <MainLayout>
        {to && type && isOpen ? (
          <ModalOpening
            name={to}
            isOpen={isOpen}
            onClose={onClose}
            type={type}
          />
        ) : (
          <>
            <BackgroundFixed />
            <Box h={"100vh"} scrollSnapAlign="center" width="100%">
              <Hero type={type} />
            </Box>
            <Box h={"100vh"} scrollSnapAlign="center" width="100%">
              <WeddingText />
            </Box>
            <Box h={"100vh"} scrollSnapAlign="center" width="100%">
              <WeddingSchedule
                // @ts-ignore
                maps={maps}
                handleScroll={handleScroll}
                type={type}
              />
            </Box>

            <Box h={"100vh"} scrollSnapAlign="center" width="100%">
              <MapsInvitation
                // @ts-ignore
                maps={maps}
              />
            </Box>
            <Box h={"100vh"} scrollSnapAlign="center" maxWidth="100%">
              <GuestBook messages={messages} to={to} />
            </Box>
            <Box h={"100vh"} scrollSnapAlign="center" width="100%">
              <ProkesCovid />
            </Box>
            <Box h={"100vh"} scrollSnapAlign="center" width="100%">
              <ClosingInvitation />
            </Box>
            <Box h={"10vh"} scrollSnapAlign="center" width="100%">
              <Footer />
            </Box>
          </>
        )}
      </MainLayout>

      {/* @ts-ignore */}
      {/* <Backsound play={play} audioRef={audioRef} /> */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let to = "";
  let type: InvitationType;

  try {
    if (!context.query.to || !context.query.type) {
      return {
        props: {
          to: null,
        },
      };
    }

    if (
      context.query.type === InvitationType.Resepsi ||
      context.query.type === InvitationType.Unduh ||
      context.query.type === InvitationType.ResepsiUnduh
    ) {
      type = context.query.type;

      const response = await fetch(
        `${process.env.BACKEND_API}/api/v1/messages`,
        {
          method: "GET",
        }
      );
      const messages = (await response.json()).data as IMessage[];

      return {
        props: {
          messages,
          to: context.query.to,
          type,
        },
      };
    }

    return {
      props: {
        to: null,
      },
    };
  } catch (error) {
    return {
      props: {
        messages: [],
        to: context.query.to,
      },
    };
  }
};

export default Home;
