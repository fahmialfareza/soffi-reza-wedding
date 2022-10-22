import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { confirmable, createConfirmation } from "react-confirm";

interface ConfirmationProps {
  okLabel: string;
  cancelLabel: string;
  title: string;
  confirmation: string;
  show: boolean;
  proceed: (data: boolean) => void; // called when ok button is clicked.
  enableEscape: boolean;
}

const Confirmation = ({
  okLabel = "Ya",
  cancelLabel = "Tidak",
  title = "Konfirmasi",
  confirmation,
  show,
  proceed,
  enableEscape = true,
}: ConfirmationProps) => {
  return (
    <div className="static-modal">
      <Modal
        animation={false}
        show={show}
        onHide={() => proceed(false)}
        backdrop={enableEscape ? true : "static"}
        keyboard={enableEscape}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{confirmation}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => proceed(false)}>{cancelLabel}</Button>
          <Button
            className="button-l"
            variant="primary"
            onClick={() => proceed(true)}
          >
            {okLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  enableEscape: PropTypes.bool,
};

export function confirm(
  confirmation = "Apakah yakin ingin melakukannya?",
  proceedLabel = "Ya",
  cancelLabel = "Tidak",
  options = {}
) {
  // @ts-ignore
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options,
  });
}
