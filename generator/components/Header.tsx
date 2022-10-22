import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [pathname, setPathname] = useState(router.pathname);

  useEffect(() => {
    if (router.isReady) {
      setPathname(router.pathname);
    }
  }, [router]);

  return (
    <Navbar bg="primary" variant="dark" className="mb-4">
      <Container>
        <Link href={"/"} passHref>
          <Navbar.Brand>Generator Undangan</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link href={"/"} passHref>
            <Nav.Link className={pathname === "/" ? "active" : ""}>
              Beranda
            </Nav.Link>
          </Link>
          <Link href="/invitations" passHref>
            <Nav.Link className={pathname === "/invitations" ? "active" : ""}>
              Import Undangan
            </Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
