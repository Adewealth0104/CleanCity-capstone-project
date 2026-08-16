import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const MAX_LENGTH = 280;

function PledgeForm({ onSubmit }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = text.trim();

    if (!trimmed) {
      setError("Please write a pledge before submitting.");
      return;
    }

    if (trimmed.length > MAX_LENGTH) {
      setError(`Your pledge must be ${MAX_LENGTH} characters or fewer.`);
      return;
    }

    onSubmit(trimmed);
    setText("");
    setError("");
  };

  return (
    <div className="soft-card pledge-card">
      <span className="eyebrow">Make it personal</span>
      <h2 className="h4 fw-bold mt-1">My clean-city pledge</h2>
      <p className="muted">Write one realistic action you intend to keep.</p>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="pledge-text">
          <Form.Label>Your pledge</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={text}
            maxLength={MAX_LENGTH}
            onChange={(e) => setText(e.target.value)}
            placeholder="I will..."
            isInvalid={Boolean(error)}
          />
          <div className="d-flex justify-content-between mt-2">
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
            <small className="text-muted ms-auto">{text.length}/{MAX_LENGTH}</small>
          </div>
        </Form.Group>
        <Button type="submit" className="btn-brand-dark mt-3">Add my pledge</Button>
      </Form>
    </div>
  );
}

export default PledgeForm;
