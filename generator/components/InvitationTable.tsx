import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faCancel } from "@fortawesome/free-solid-svg-icons";
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

function InvitationTable({ invitations }: InvitationTableProps) {
  const router = useRouter();

  return (
    <>
      <Table bordered striped hover responsive className="mb-5">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
            <th>
              Salin Undangan <br />
              <p style={{ fontWeight: "normal" }}>
                Biru: Undangan pernah disalin <br />
                Abu-abu: Undangan belum disalin
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {invitations.length > 0 ? (
            invitations.map((invitation, index) => (
              <tr key={invitation.id}>
                <td className="text-center">{index + 1}</td>
                <td>{invitation.name}</td>
                <td>
                  <h6>Resepsi: </h6>
                  <a
                    href={invitation.urlResepsi}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {invitation.urlResepsi}
                  </a>
                  <hr />
                  <h6>Unduh Mantu: </h6>
                  <a
                    href={invitation.urlUnduh}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {invitation.urlUnduh}
                  </a>
                  <hr />
                  <h6>Resepsi & Unduh Mantu: </h6>
                  <a
                    href={invitation.urlResepsiUnduh}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    {invitation.urlResepsiUnduh}
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
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} /> {"   "}{" "}
                    Resepsi
                  </Button>
                  <hr />
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
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} /> {"   "} Unduh
                    Mantu
                  </Button>
                  <hr />
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
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} /> {"   "}{" "}
                    Resepsi & Unduh Mantu
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
