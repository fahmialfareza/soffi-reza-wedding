import { FormEvent, useState } from "react";
import Head from "next/head";
import { Form, Button, Container, Card } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function Invitations() {
  const router = useRouter();

  const [file, setFile] = useState<string | Blob>();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (!file) {
        toast.error("File wajib diisi!");
        return;
      }

      var formdata = new FormData();
      formdata.append("file", file);

      var requestOptions: RequestInit = {
        method: "POST",
        body: formdata,
      };

      await fetch(
        "https://api.soffi-reza.wedding/api/v1/invitations",
        requestOptions
      );

      toast.success("Berhasil mengimport data undangan!");
      router.push("/?to=");
    } catch (error) {
      toast.error("Gagal mengimport data undangan!");
    }
  };

  return (
    <Container>
      <Head>
        <title>Generator Undangan - Import Undangan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <Card.Header as="h5">Import Undangan (Excel file)</Card.Header>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Excel file (.xlsx)</Form.Label>
              <Form.Control
                type="file"
                name="file"
                id="file"
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                onChange={(e) => {
                  // @ts-ignore
                  setFile(e.target.files[0]);
                }}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Invitations;
