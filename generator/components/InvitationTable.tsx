import { MouseEvent, useEffect, useState } from "react";
import { Button, Table, Alert, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import IInvitation, {
  InvitationType,
} from "../interfaces/invitation.interface";
import unduhMantu from "../helpers/unduhMantu";
import akadResepsi from "../helpers/akadResepsi";
import resepsiUnduh from "../helpers/resepsiUnduh";

interface InvitationTableProps {
  invitations: IInvitation[];
}

function InvitationTable({
  invitations: invitationsFromIndex,
}: InvitationTableProps) {
  const router = useRouter();

  const [filter, setFilter] = useState(0);
  const [invitations, setInvitations] =
    useState<IInvitation[]>(invitationsFromIndex);

  useEffect(() => {
    if (filter === 0) {
      setInvitations(invitationsFromIndex);
    } else if (filter === 1) {
      const filteredInvitations = invitationsFromIndex.filter(
        (invitation) =>
          invitation.copiedResepsi ||
          invitation.copiedUnduh ||
          invitation.copiedResepsiUnduh
      );
      setInvitations(filteredInvitations);
    } else if (filter === 2) {
      const filteredInvitations = invitationsFromIndex.filter(
        (invitation) =>
          !(
            invitation.copiedResepsi ||
            invitation.copiedUnduh ||
            invitation.copiedResepsiUnduh
          )
      );
      setInvitations(filteredInvitations);
    }
  }, [filter, invitationsFromIndex]);

  return (
    <>
      <div>
        <Alert variant="primary">Biru: Undangan pernah disalin</Alert>
        <Alert variant="secondary">Abu-abu: Undangan belum disalin</Alert>
      </div>

      <Row className="my-4">
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant={filter === 0 ? "primary" : "secondary"}
              onClick={(e) => {
                e.preventDefault();
                setFilter(0);
              }}
            >
              Tampilkan semua undangan
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant={filter === 1 ? "primary" : "secondary"}
              onClick={(e) => {
                e.preventDefault();
                setFilter(1);
              }}
            >
              Tampilkan undangan yang pernah disalin
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant={filter === 2 ? "primary" : "secondary"}
              onClick={(e) => {
                e.preventDefault();
                setFilter(2);
              }}
            >
              Tampilkan undangan yang belum disalin
            </Button>
          </div>
        </Col>
      </Row>

      <Table bordered striped hover responsive className="mb-5">
        <thead>
          <tr className="text-center">
            <th rowSpan={2}>No</th>
            <th rowSpan={2}>Nama</th>
            <th colSpan={3}>Link</th>
            <th colSpan={3}>Salin Undangan</th>
          </tr>
          <tr className="text-center">
            <th>Resepsi</th>
            <th>Unduh Mantu</th>
            <th>Resepsi & Unduh Mantu</th>
            <th>Resepsi</th>
            <th>Unduh Mantu</th>
            <th>Resepsi & Unduh Mantu</th>
          </tr>
        </thead>
        <tbody>
          {invitations.length > 0 ? (
            invitations.map((invitation, index) => (
              <tr key={invitation.id}>
                <td className="text-center">{index + 1}</td>
                <td>{invitation.name}</td>
                <td className="text-center">
                  <FontAwesomeIcon
                    icon={faCopy}
                    size={"xl"}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(invitation.urlResepsi);
                      toast.success(
                        `Berhasil menyalin link resepsi untuk ${invitation.name}`
                      );
                    }}
                  />{" "}
                  <a
                    href={invitation.urlResepsi}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Buka
                  </a>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon
                    icon={faCopy}
                    size={"xl"}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(invitation.urlUnduh);
                      toast.success(
                        `Berhasil menyalin link unduh mantu untuk ${invitation.name}`
                      );
                    }}
                  />{" "}
                  <a
                    href={invitation.urlUnduh}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Buka
                  </a>
                </td>
                <td className="text-center">
                  <FontAwesomeIcon
                    icon={faCopy}
                    size={"xl"}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(invitation.urlResepsiUnduh);
                      toast.success(
                        `Berhasil menyalin link resepsi & unduh mantu untuk ${invitation.name}`
                      );
                    }}
                  />{" "}
                  <a
                    href={invitation.urlResepsiUnduh}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Buka
                  </a>
                </td>
                <td className="text-center">
                  <Button
                    variant={
                      invitation.copiedResepsi ? "primary" : "outline-secondary"
                    }
                    className="mx-1"
                    onClick={async () => {
                      try {
                        navigator.clipboard.writeText(
                          akadResepsi(invitation.name, invitation.urlResepsi)
                        );

                        const myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        const raw = JSON.stringify({
                          type: InvitationType.Resepsi,
                        });

                        await fetch(
                          `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/invitations/${invitation.id}`,
                          {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                          }
                        );

                        toast.success(
                          `Berhasil menyalin undangan untuk ${invitation.name}!`
                        );
                        if (router.asPath === "/") {
                          router.push("/?to=");
                          return;
                        }
                        router.replace(router.asPath);
                      } catch (error) {
                        toast.error(
                          `Gagal menyalin undangan untuk ${invitation.name}!`
                        );
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} />
                  </Button>
                </td>
                <td className="text-center">
                  <Button
                    variant={
                      invitation.copiedUnduh ? "primary" : "outline-secondary"
                    }
                    className="mx-1"
                    onClick={async () => {
                      try {
                        navigator.clipboard.writeText(
                          unduhMantu(invitation.name, invitation.urlUnduh)
                        );

                        const myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        const raw = JSON.stringify({
                          type: InvitationType.Unduh,
                        });

                        await fetch(
                          `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/invitations/${invitation.id}`,
                          {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                          }
                        );

                        toast.success(
                          `Berhasil menyalin undangan untuk ${invitation.name}!`
                        );
                        if (router.asPath === "/") {
                          router.push("/?to=");
                          return;
                        }
                        router.replace(router.asPath);
                      } catch (error) {
                        toast.error(
                          `Gagal menyalin undangan untuk ${invitation.name}!`
                        );
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} />
                  </Button>
                </td>
                <td className="text-center">
                  <Button
                    variant={
                      invitation.copiedResepsiUnduh
                        ? "primary"
                        : "outline-secondary"
                    }
                    className="mx-1"
                    onClick={async () => {
                      try {
                        navigator.clipboard.writeText(
                          resepsiUnduh(
                            invitation.name,
                            invitation.urlResepsiUnduh
                          )
                        );

                        const myHeaders = new Headers();
                        myHeaders.append("Content-Type", "application/json");

                        const raw = JSON.stringify({
                          type: InvitationType.ResepsiUnduh,
                        });

                        await fetch(
                          `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/invitations/${invitation.id}`,
                          {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                          }
                        );

                        toast.success(
                          `Berhasil menyalin undangan untuk ${invitation.name}!`
                        );
                        if (router.asPath === "/") {
                          router.push("/?to=");
                          return;
                        }
                        router.replace(router.asPath);
                      } catch (error) {
                        toast.error(
                          `Gagal menyalin undangan untuk ${invitation.name}!`
                        );
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>
                {router.query?.to ? (
                  <h5 className="text-center">
                    Pencarian {`"${router.query.to}"`} tidak ditemukan!
                  </h5>
                ) : (
                  <h5 className="text-center">Data tidak ditemukan!</h5>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default InvitationTable;
