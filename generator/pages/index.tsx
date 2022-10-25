import { FormEvent, useState, useEffect } from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

import InvitationTable from "../components/InvitationTable";
import IInvitation from "../interfaces/invitation.interface";
import Search from "../components/Search";

interface HomeProps {
  invitations: IInvitation[];
}

const Home = ({ invitations }: HomeProps) => {
  const router = useRouter();

  const [search, setSearch] = useState(router.query.to);

  const onSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!search) {
      router.push("/");
      return;
    }
    router.push(`/?to=${search}`);
  };

  useEffect(() => {
    if (!router.query.to) {
      setSearch("");
    }
  }, [router.query]);

  return (
    <Container className="mb-5">
      <Head>
        <title>Generator Undangan - Beranda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search onSearch={onSearch} search={search} setSearch={setSearch} />

      <InvitationTable invitations={invitations} />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    let invitations: IInvitation;

    if (context.query?.to) {
      const response = await fetch(
        `${process.env.BACKEND_API}/api/v1/invitations/${context.query.to}`,
        { method: "GET" }
      );
      invitations = (await response.json()).data as IInvitation;
    } else {
      const response = await fetch(
        `${process.env.BACKEND_API}/api/v1/invitations`,
        { method: "GET" }
      );
      invitations = (await response.json()).data as IInvitation;
    }

    return {
      props: {
        invitations,
      },
    };
  } catch (error) {
    return {
      props: {
        invitations: [],
      },
    };
  }
};

export default Home;
