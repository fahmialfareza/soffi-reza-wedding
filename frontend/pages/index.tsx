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

interface HomeProps {
  messages: IMessage[];
}

const socket = io(process.env.NEXT_PUBLIC_BACKEND_API!);

const Home: NextPage<HomeProps> = ({ messages: messageFromSSR }) => {
  const [messages, setMessages] = useState(messageFromSSR);

  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("message", (message: IMessage) => {
      setMessages([message, ...messages]);
    });
  }, [messages]);

  return (
    <MainLayout>
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
  try {
    const response = await fetch(`${process.env.BACKEND_API}/api/v1/messages`, {
      method: "GET",
    });
    const messages = (await response.json()).data as IMessage[];

    return {
      props: {
        messages,
      },
    };
  } catch (error) {
    return {
      props: {
        messages: [],
      },
    };
  }
};

export default Home;
