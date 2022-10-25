import { useEffect, useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
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
import NotValid from "../components/NotValid";
import { useDisclosure } from "@chakra-ui/react";
import ModalOpening from "../components/ModalOpening";

interface HomeProps {
  messages: IMessage[];
  error: string;
  to: string;
}

const socket = io(process.env.NEXT_PUBLIC_BACKEND_API!);

const Home: NextPage<HomeProps> = ({ messages: messageFromSSR, error, to }) => {
  const [messages, setMessages] = useState(messageFromSSR);
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });


  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("message", (message: IMessage) => {
      setMessages([message, ...messages]);
    });
  }, [messages]);

  if (error) {
    return (
      <MainLayout>
        <NotValid />
      </MainLayout>
    );
  }

  // TODO: Consume "to" variable to modal
  // The user need to "Buka Undangan if thet want to look at the invitation"

  return (
    <MainLayout>
      <ModalOpening name={to} isOpen={isOpen} onClose={onClose} />
      <Hero />
      <WeddingText />
      <WeddingSchedule />
      <MapsInvitation />
      <GuestBook messages={messages} />
      <ProkesCovid />
      <ClosingInvitation />
      <Footer />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let to = "";

  try {
    if (!context.query.to) {
      return {
        props: {
          error: "Undangan tidak valid!",
        },
      };
    }

    const response = await fetch(`${process.env.BACKEND_API}/api/v1/messages`, {
      method: "GET",
    });
    const messages = (await response.json()).data as IMessage[];

    return {
      props: {
        messages,
        to: context.query.to,
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
