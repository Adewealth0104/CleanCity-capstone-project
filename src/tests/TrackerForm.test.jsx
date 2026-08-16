import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TrackerForm from "../components/TrackerForm";

describe("TrackerForm validation", () => {
  test("rejects an empty category and quantity of zero", async () => {
    const user = userEvent.setup();

    render(<TrackerForm onSubmit={jest.fn()} editingEntry={null} onCancelEdit={jest.fn()} />);

    await user.click(screen.getByRole("button", { name: /add to tracker/i }));

    expect(screen.getByText("Please choose a waste category.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a quantity.")).toBeInTheDocument();

    const quantity = screen.getByLabelText(/quantity recycled/i);
    await user.type(quantity, "0");

    await user.click(screen.getByRole("button", { name: /add to tracker/i }));

    expect(screen.getByText("Quantity must be greater than 0.")).toBeInTheDocument();
  });
});
