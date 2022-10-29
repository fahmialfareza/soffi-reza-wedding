import { useEffect, useState } from "react";
import { Button, Table, Alert, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

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

  const onLinkCopy = (url: string, name: string, eventName: string) => {
    try {
      navigator.clipboard.writeText(url);
      toast.success(`Berhasil menyalin link ${eventName} untuk ${name}`);
    } catch (error) {
      toast.error(`Gagal menyalin link ${eventName} untuk ${name}`);
    }
  };

  const onInvitationCopy = async (
    id: string,
    name: string,
    url: string,
    type: InvitationType
  ) => {
    try {
      if (type === InvitationType.Resepsi) {
        navigator.clipboard.writeText(akadResepsi(name, url));
      } else if (type === InvitationType.Unduh) {
        navigator.clipboard.writeText(unduhMantu(name, url));
      } else if (type === InvitationType.ResepsiUnduh) {
        navigator.clipboard.writeText(resepsiUnduh(name, url));
      }

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({ type });

      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/invitations/${id}`,
        {
          method: "POST",
          headers: myHeaders,
          body: raw,
        }
      );

      toast.success(`Berhasil menyalin undangan untuk ${name}!`);
      if (router.asPath === "/") {
        router.push("/?to=");
        return;
      }
      router.replace(router.asPath);
    } catch (error) {
      toast.error(`Gagal menyalin undangan untuk ${name}!`);
    }
  };

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
      <Row>
        <Col>
          <Alert variant="primary">
            <FontAwesomeIcon icon={faInfoCircle} /> Biru: Undangan pernah
            disalin
          </Alert>
        </Col>
        <Col>
          <Alert variant="secondary">
            <FontAwesomeIcon icon={faInfoCircle} /> Abu-abu: Undangan belum
            disalin
          </Alert>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <DropdownButton id="filter" title="Tampilkan">
            <Dropdown.Item
              active={filter === 0}
              onClick={(e) => {
                e.preventDefault();
                setFilter(0);
              }}
            >
              Tampilkan Semua
            </Dropdown.Item>
            <Dropdown.Item
              active={filter === 1}
              onClick={(e) => {
                e.preventDefault();
                setFilter(1);
              }}
            >
              Tampilkan Yang Sudah Pernah Disalin
            </Dropdown.Item>
            <Dropdown.Item
              active={filter === 2}
              onClick={(e) => {
                e.preventDefault();
                setFilter(2);
              }}
            >
              Tampilkan Yang Belum Pernah Disalin
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>

      <Table bordered striped hover responsive className="mb-5">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
            <th>Undangan</th>
          </tr>
        </thead>
        <tbody>
          {invitations.length > 0 ? (
            invitations.map((invitation, index) => (
              <tr key={invitation.id}>
                <td className="text-center">{index + 1}</td>
                <td>{invitation.name}</td>
                <td className="text-center">
                  <DropdownButton id="copy-link" title="Salin">
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkCopy(
                          invitation.urlResepsi,
                          invitation.name,
                          "resepsi"
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} /> Resepsi
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkCopy(
                          invitation.urlUnduh,
                          invitation.name,
                          "unduh mantu"
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} /> Unduh Mantu
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        onLinkCopy(
                          invitation.urlResepsiUnduh,
                          invitation.name,
                          "resepsi & unduh mantu"
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} /> Resepsi & Unduh Mantu
                    </Dropdown.Item>
                  </DropdownButton>
                </td>
                <td className="text-center">
                  <DropdownButton
                    id="copy-invitation"
                    title="Salin"
                    variant={
                      invitation.copiedResepsi ||
                      invitation.copiedUnduh ||
                      invitation.copiedResepsiUnduh
                        ? "primary"
                        : "secondary"
                    }
                  >
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        onInvitationCopy(
                          invitation.id,
                          invitation.name,
                          invitation.urlResepsi,
                          InvitationType.Resepsi
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} /> Resepsi
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        onInvitationCopy(
                          invitation.id,
                          invitation.name,
                          invitation.urlUnduh,
                          InvitationType.Unduh
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} /> Unduh Mantu
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault();
                        onInvitationCopy(
                          invitation.id,
                          invitation.name,
                          invitation.urlResepsiUnduh,
                          InvitationType.ResepsiUnduh
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faCopy} /> Resepsi & Unduh Mantu
                    </Dropdown.Item>
                  </DropdownButton>
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
