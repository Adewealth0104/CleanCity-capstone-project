import { Modal, Button } from "react-bootstrap";

function ConfirmDialog({ show, title, message, onConfirm, onCancel, confirmLabel = "Confirm" }) {
  return (
    <Modal show={show} onHide={onCancel} centered aria-labelledby="confirm-dialog-title">
      <Modal.Header closeButton>
        <Modal.Title id="confirm-dialog-title">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onCancel}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>{confirmLabel}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmDialog;
