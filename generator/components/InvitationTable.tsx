import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck, faCancel } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import IInvitation from "../interfaces/invitation.interface";

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
            <th>Disalin</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {invitations.length > 0 ? (
            invitations.map((invitation, index) => (
              <tr key={invitation.id}>
                <td className="text-center">{index + 1}</td>
                <td>{invitation.name}</td>
                <td>
                  <a href={invitation.url} target={"_blank"} rel="noreferrer">
                    {invitation.url}
                  </a>
                </td>
                <td className="text-center">
                  {invitation.copied ? (
                    <FontAwesomeIcon icon={faCheck} size="xl" color="green" />
                  ) : (
                    <FontAwesomeIcon icon={faCancel} size="xl" color="red" />
                  )}
                </td>
                <td>
                  <Button
                    variant={"outline-secondary"}
                    onClick={async () => {
                      try {
                        navigator.clipboard.writeText(invitation.url);

                        await fetch(
                          `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/invitations/${invitation.id}`,
                          { method: "POST" }
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
                    <FontAwesomeIcon icon={faCopy} size={"2xl"} /> {"   "} Salin
                    Link
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
