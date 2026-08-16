function Badge({ label = "10+ recycled" }) {
  return <span className="badge-ribbon" aria-label={`Achievement: ${label}`}>✦ {label}</span>;
}

export default Badge;
