import { Container } from "react-bootstrap";
import Head from "next/head";

function Footer() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <footer className="footer bg-primary mt-5">
        <Container className="text-center p-3">
          <span className="text-light">Designed by Fahmi Alfareza</span>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
