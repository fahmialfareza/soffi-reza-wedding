import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import ClosingInvitation from "../components/Clossing";
import Footer from "../components/Footer";
import GuestBook from "../components/GuestBook";
import Hero from "../components/Hero";
import MainLayout from "../components/layout/MainLayout";
import MapsInvitation from "../components/Maps";
import ProkesCovid from "../components/Prokes";
import WeddingSchedule from "../components/WeddingSchedule";
import WeddingText from "../components/WeddingText";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero/>
      <WeddingText/>
      <WeddingSchedule />
      <MapsInvitation />
      <GuestBook />
      <ProkesCovid />
      <ClosingInvitation />
      <Footer />
    </MainLayout>
  );
};

export default Home;
