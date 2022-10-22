import { Container, Navbar } from "react-bootstrap";
import Head from "next/head";

function Footer() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar bg="primary mt-5" fixed="bottom">
        <Container className="p-3">
          <span className="text-light">
            <h6>Designed by Fahmi Alfareza</h6>
          </span>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
