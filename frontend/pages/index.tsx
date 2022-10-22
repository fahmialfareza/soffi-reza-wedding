import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import MainLayout from "../components/layout/MainLayout";
import WeddingSchedule from "../components/WeddingSchedule";
import WeddingText from "../components/WeddingText";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero/>
      <WeddingText/>
      <WeddingSchedule />
    </MainLayout>
  );
};

export default Home;
