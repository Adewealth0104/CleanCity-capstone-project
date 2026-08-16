import { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export const CATEGORIES = ["Plastic", "Organic", "E-waste", "Paper", "Glass"];

function TrackerForm({ onSubmit, editingEntry, onCancelEdit }) {
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingEntry) {
      setCategory(editingEntry.category);
      setQuantity(String(editingEntry.quantity));
      setErrors({});
    } else {
      setCategory("");
      setQuantity("");
      setErrors({});
    }
  }, [editingEntry]);

  const validate = () => {
    const nextErrors = {};

    if (!category) nextErrors.category = "Please choose a waste category.";

    if (quantity === "") {
      nextErrors.quantity = "Please enter a quantity.";
    } else if (Number.isNaN(Number(quantity))) {
      nextErrors.quantity = "Quantity must be a number.";
    } else if (Number(quantity) <= 0) {
      nextErrors.quantity = "Quantity must be greater than 0.";
    } else if (!Number.isInteger(Number(quantity))) {
      nextErrors.quantity = "Quantity must be a whole number.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    onSubmit({ category, quantity: Number(quantity) });

    if (!editingEntry) {
      setCategory("");
      setQuantity("");
      setErrors({});
    }
  };

  return (
    <div className="soft-card p-4">
      <div className="mb-4">
        <span className="eyebrow">{editingEntry ? "Update a record" : "Add a record"}</span>
        <h2 className="h4 fw-bold mt-1 mb-1">
          {editingEntry ? "Edit recycling entry" : "Log your recycling"}
        </h2>
        <p className="muted mb-0">Record items by category. Keep the numbers honest and meaningful.</p>
      </div>

      {Object.keys(errors).length > 0 && (
        <Alert variant="danger" role="alert">
          Please correct the highlighted fields.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <Form.Group className="mb-3" controlId="tracker-category">
          <Form.Label>Waste category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-invalid={Boolean(errors.category)}
            isInvalid={Boolean(errors.category)}
          >
            <option value="">Choose a category</option>
            {CATEGORIES.map((item) => <option key={item} value={item}>{item}</option>)}
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errors.category}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="tracker-quantity">
          <Form.Label>Quantity recycled</Form.Label>
          <Form.Control
            type="number"
            min="1"
            step="1"
            inputMode="numeric"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 5"
            aria-invalid={Boolean(errors.quantity)}
            isInvalid={Boolean(errors.quantity)}
          />
          <Form.Text className="text-muted">Use a positive whole number.</Form.Text>
          <Form.Control.Feedback type="invalid">{errors.quantity}</Form.Control.Feedback>
        </Form.Group>

        <div className="d-flex gap-2">
          <Button type="submit" className="btn-brand-dark">
            {editingEntry ? "Save changes" : "Add to tracker"}
          </Button>
          {editingEntry && (
            <Button type="button" variant="outline-secondary" onClick={onCancelEdit}>
              Cancel
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
}

export default TrackerForm;
