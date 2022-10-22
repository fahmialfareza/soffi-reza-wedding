import { VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Hero from "../components/Hero";
import MainLayout from "../components/layout/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero/>
    </MainLayout>
  );
};

export default Home;
