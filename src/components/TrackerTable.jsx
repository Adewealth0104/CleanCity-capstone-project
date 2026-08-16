import { Button, Table } from "react-bootstrap";

function TrackerTable({ logs, onEdit, onDelete }) {
  if (logs.length === 0) {
    return (
      <div className="soft-card empty-state">
        <div className="fs-1 mb-2">♻</div>
        <h2 className="h5 fw-bold">Nothing to show yet</h2>
        <p className="mb-0">Add your first recycling record and your progress will appear here.</p>
      </div>
    );
  }

  return (
    <div className="soft-card table-card">
      <Table responsive hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Quantity</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td><span className="category-dot me-2" aria-hidden="true" />{log.category}</td>
              <td className="fw-bold">{log.quantity}</td>
              <td className="text-end">
                <div className="d-flex justify-content-end gap-2">
                  <Button size="sm" variant="outline-success" onClick={() => onEdit(log)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="outline-danger" onClick={() => onDelete(log)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TrackerTable;
