import { useMemo, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TrackerForm from "../components/TrackerForm";
import TrackerTable from "../components/TrackerTable";
import Chart from "../components/Chart";
import CategorySummaryCard from "../components/CategorySummaryCard";
import ConfirmDialog from "../components/ConfirmDialog";
import withBadge from "../hocs/withBadge";
import useRecyclingLog from "../hooks/useRecyclingLog";

const BadgedCategoryCard = withBadge(CategorySummaryCard);

function RecyclingTracker() {
  const {
    logs,
    addEntry,
    editEntry,
    deleteEntry,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    filteredAndSortedLogs,
    categoryTotals,
    totalRecycled
  } = useRecyclingLog();

  const [editingEntry, setEditingEntry] = useState(null);
  const [pendingAction, setPendingAction] = useState(null);

  const categoryCards = useMemo(() => {
    const known = ["Plastic", "Organic", "E-waste", "Paper", "Glass"];
    return known.map((category) => ({ category, total: categoryTotals[category] || 0 }));
  }, [categoryTotals]);

  const handleSave = (entry) => {
    if (editingEntry) {
      setPendingAction({ type: "edit", id: editingEntry.id, entry });
    } else {
      addEntry(entry);
    }
  };

  const confirmAction = () => {
    if (!pendingAction) return;
    if (pendingAction.type === "delete") deleteEntry(pendingAction.id);
    if (pendingAction.type === "edit") editEntry(pendingAction.id, pendingAction.entry);
    setEditingEntry(null);
    setPendingAction(null);
  };

  const cancelAction = () => {
    setPendingAction(null);
  };

  return (
    <div className="page-wrap">
      <Container>
        <div className="d-flex flex-column flex-lg-row justify-content-between gap-4 mb-5">
          <div>
            <span className="eyebrow">Your recycling record</span>
            <h1 className="section-title mt-2">Make your impact visible.</h1>
            <p className="muted mt-3 mb-0 col-lg-8">
              Add what you recycle, keep the record tidy, and let the numbers tell
              you where your habits are growing.
            </p>
          </div>
          <div className="soft-card stat-card align-self-start">
            <div className="stat-value">{totalRecycled}</div>
            <div className="stat-label">total items recycled</div>
          </div>
        </div>

        <Row className="g-4">
          <Col lg={5}>
            <TrackerForm
              onSubmit={handleSave}
              editingEntry={editingEntry}
              onCancelEdit={() => setEditingEntry(null)}
            />
          </Col>

          <Col lg={7}>
            <div className="soft-card filter-bar mb-3">
              <Row className="g-3">
                <Col md={6}>
                  <Form.Label htmlFor="tracker-search">Search by category</Form.Label>
                  <Form.Control
                    id="tracker-search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="e.g. plastic"
                  />
                </Col>
                <Col sm={6} md={3}>
                  <Form.Label htmlFor="sort-by">Sort by</Form.Label>
                  <Form.Select id="sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="category">Category</option>
                    <option value="quantity">Quantity</option>
                  </Form.Select>
                </Col>
                <Col sm={6} md={3}>
                  <Form.Label htmlFor="sort-direction">Direction</Form.Label>
                  <Button
                    id="sort-direction"
                    variant="outline-secondary"
                    className="w-100"
                    onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
                    aria-label={`Sort ${sortDirection === "asc" ? "descending" : "ascending"}`}
                  >
                    {sortDirection === "asc" ? "Ascending ↑" : "Descending ↓"}
                  </Button>
                </Col>
              </Row>
            </div>

            <TrackerTable
              logs={filteredAndSortedLogs}
              onEdit={(log) => setEditingEntry(log)}
              onDelete={(log) => setPendingAction({ type: "delete", id: log.id, entry: log })}
            />
          </Col>
        </Row>

        <section className="mt-5">
          <div className="mb-3">
            <span className="eyebrow">Milestones</span>
            <h2 className="h4 fw-bold mt-1">Where your effort is adding up</h2>
          </div>
          <Row className="g-3">
            {categoryCards.map(({ category, total }) => (
              <Col sm={6} lg={4} xl key={category}>
                <BadgedCategoryCard category={category} total={total} />
              </Col>
            ))}
          </Row>
        </section>

        <section className="mt-5">
          <Chart totals={categoryTotals} />
        </section>
      </Container>

      <ConfirmDialog
        show={Boolean(pendingAction)}
        title={pendingAction?.type === "delete" ? "Delete this record?" : "Save this change?"}
        message={
          pendingAction?.type === "delete"
            ? `This will remove the ${pendingAction?.entry?.category || "recycling"} record from your tracker.`
            : "Your edited quantity will replace the existing record."
        }
        confirmLabel={pendingAction?.type === "delete" ? "Delete record" : "Save change"}
        onConfirm={confirmAction}
        onCancel={cancelAction}
      />
    </div>
  );
}

export default RecyclingTracker;
