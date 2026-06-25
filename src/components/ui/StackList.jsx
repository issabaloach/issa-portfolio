export default function StackList({ items, max }) {
  const visible = max ? items.slice(0, max) : items;
  const overflow = max && items.length > max ? items.length - max : 0;

  return (
    <div className="stack-list" style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
      {visible.map((s) => (
        <span key={s} className="tag">{s}</span>
      ))}
      {overflow > 0 && (
        <span className="tag" style={{ opacity: 0.6 }}>+{overflow}</span>
      )}
    </div>
  );
}
