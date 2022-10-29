import { FormEvent, Dispatch, SetStateAction } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";

import { confirm } from "../components/Confirmation";

interface SearchProps {
  onSearch: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  search: string | string[] | undefined;
  setSearch: Dispatch<SetStateAction<string | string[] | undefined>>;
}

function Search({ onSearch, search, setSearch }: SearchProps) {
  const router = useRouter();

  return (
    <Form onSubmit={onSearch} className="mt-4">
      <Row>
        <Col md={8} sm={8} xs={6}>
          <Form.Group className="mb-3">
            <Form.Control
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari Undangan"
            />
          </Form.Group>
        </Col>
        <Col md={2} sm={2} xs={3}>
          <div className="d-grid gap-2">
            <Button type="submit" variant="primary">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </Col>
        <Col md={2} sm={2} xs={3}>
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              onClick={async (e) => {
                e.preventDefault();

                const confirmation = await confirm(
                  "Yakin ingin menghapus semuanya?"
                );
                if (confirmation) {
                  try {
                    await fetch(
                      `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/invitations`,
                      { method: "DELETE" }
                    );

                    toast.success("Berhasil menghapus data!");
                    router.push("/?to=");
                  } catch (error) {
                    toast.error("Gagal menghapus semua data!");
                  }
                }
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default Search;
