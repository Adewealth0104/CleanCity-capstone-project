function PledgeList({ pledges }) {
  if (pledges.length === 0) {
    return (
      <div className="soft-card empty-state">
        <h2 className="h5 fw-bold">No pledges yet</h2>
        <p className="mb-0">Be the first person to make a promise to your future city.</p>
      </div>
    );
  }

  return (
    <div className="d-grid gap-3">
      {pledges.map((pledge) => (
        <article className="soft-card pledge-card" key={pledge.id}>
          <div className="d-flex justify-content-between gap-3">
            <span className="pill">Promise kept visible</span>
            <small className="muted">
              {new Date(pledge.createdAt).toLocaleDateString()}
            </small>
          </div>
          <p className="pledge-quote mb-0 mt-3">“{pledge.text}”</p>
        </article>
      ))}
    </div>
  );
}

export default PledgeList;
