import Badge from "../components/Badge";

function withBadge(Component) {
  function WithBadge({ total = 0, ...props }) {
    const hasBadge = total > 10;

    return (
      <div className="badge-shell">
        {hasBadge && <Badge label="10+ recycled" />}
        <Component {...props} total={total} />
      </div>
    );
  }

  WithBadge.displayName = `withBadge(${Component.displayName || Component.name || "Component"})`;
  return WithBadge;
}

export default withBadge;
