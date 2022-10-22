import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

import IInvitation from "../interfaces/invitation.interface";

interface InvitationTableProps {
  invitations: IInvitation[];
}

function InvitationTable({ invitations }: InvitationTableProps) {
  return (
    <>
      <Table bordered striped hover responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Link</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {invitations.map((invitation, index) => (
            <tr key={invitation.id}>
              <td>{index + 1}</td>
              <td>{invitation.name}</td>
              <td>
                <a href={invitation.url} target={"_blank"} rel="noreferrer">
                  {invitation.url}
                </a>
              </td>
              <td>
                <Button
                  variant={"outline-secondary"}
                  onClick={() => {
                    navigator.clipboard.writeText(invitation.url);
                    toast.success(
                      `Berhasil menyalin undangan untuk ${invitation.name}!`
                    );
                  }}
                >
                  <FontAwesomeIcon icon={faCopy} size={"2xl"} /> {"   "} Salin
                  Link
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default InvitationTable;
