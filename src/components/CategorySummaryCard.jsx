function CategorySummaryCard({ category, total }) {
  return (
    <div className="soft-card p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="category-dot" aria-hidden="true" />
        <span className="small muted">{total} items</span>
      </div>

      <h3 className="h5 mb-0">{category}</h3>
    </div>
  );
}

export default CategorySummaryCard;